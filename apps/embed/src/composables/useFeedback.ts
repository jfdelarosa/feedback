import type { FeedbackItem } from '@/types';
import { ref } from 'vue';
import { useRequest } from '@/lib/sdk';
import { useState } from './useState';


const feedbackItems = ref<FeedbackItem[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

export function useFeedback() {
    const { user } = useState();
    const request = useRequest();

    // Load feedback items
    async function loadFeedback() {
        try {
            loading.value = true;
            error.value = null;

            const data = await request(
                `/feedback${user.value?.id ? `?userId=${user.value?.id}` : ''}`,
            );

            feedbackItems.value = data.map((item: FeedbackItem) => {
                return {
                    ...item,
                    showComments: false,
                };
            });
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to load feedback';
        } finally {
            loading.value = false;
        }
    }

    // Load comments for a specific feedback item
    async function loadComments(feedbackId: string) {
        try {
            const { comments } = await request(`/feedback/${feedbackId}/comments`);

            return comments;
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to load comments';
            return null;
        }
    }

    // Submit new feedback
    async function submitNewFeedback(title: string, content: string) {
        if (!content.trim() || !user.value || !user.value.id) return null;

        try {
            const { feedback } = await request(
                '/feedback',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        title,
                        content,
                        userId: user.value.id,
                    })
                }
            );

            feedbackItems.value = [feedback, ...feedbackItems.value];

            return feedback;
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to submit feedback';

            return null;
        }
    }

    // Vote on feedback
    async function voteOnFeedback(id: string, voteValue: number) {
        if (!user.value || !user.value.id) return;

        try {

            // Actual API call
            const { feedback } = await request(
                `/feedback/${id}/vote`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        userId: user.value.id
                    })
                }
            );

            // Update the local feedbackItems with the updated feedback
            const index = feedbackItems.value.findIndex(item => item.id === id);

            if (index !== -1) {
                feedbackItems.value[index] = {
                    ...feedbackItems.value[index],
                    votes: feedback.votes
                };
            }

            return feedback;
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to vote';
            return null;
        }
    }


    return {
        feedbackItems,
        loading,
        error,
        loadFeedback,
        loadComments,
        submitNewFeedback,
        voteOnFeedback
    };
} 