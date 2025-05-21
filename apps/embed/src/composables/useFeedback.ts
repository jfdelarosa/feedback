import type { Ref } from 'vue';
import type { PulseKitUser, FeedbackItem } from '@/types';
import { ref } from 'vue';
import { useRequest } from '@/lib/sdk';

export function useFeedback(projectId: string, user: Ref<PulseKitUser | null>) {
    const feedbackItems = ref<FeedbackItem[]>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);

    const request = useRequest(projectId, user.value);

    // Load feedback items
    async function loadFeedback() {
        try {
            loading.value = true;
            error.value = null;

            feedbackItems.value = await request(
                `/feedback${user.value?.id ? `?userId=${user.value?.id}` : ''}`,
            );
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to load feedback';
        } finally {
            loading.value = false;
        }
    }

    // Submit new feedback
    async function submitNewFeedback(title: string, content: string) {
        if (!content.trim() || !user.value) return null;

        try {
            const data = {
                title,
                content,
                userId: user.value?.id,
            };

            const result = await request(
                '/feedback',
                {
                    method: 'POST',
                    body: JSON.stringify(data)
                }
            )
            feedbackItems.value = [result.feedback, ...feedbackItems.value];
            return result;
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to submit feedback';
            return null;
        }
    }

    // Vote on feedback
    async function voteOnFeedback(id: string, voteValue: number) {
        if (!user.value) return;

        try {
            const updatedItem = await request(
                `/feedback/${id}/vote`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        userId: user.value?.id
                    })
                }
            )

            const index = feedbackItems.value.findIndex(item => item.id === id);
            if (index !== -1) {
                feedbackItems.value[index] = {
                    ...feedbackItems.value[index],
                    votes: updatedItem.feedback.votes,
                    userVote: updatedItem.feedback.userVote,
                };
            }
            return updatedItem;
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
        submitNewFeedback,
        voteOnFeedback
    };
} 