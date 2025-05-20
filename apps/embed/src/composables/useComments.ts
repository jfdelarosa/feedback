import type { Ref } from 'vue';
import type { PulseKitUser, FeedbackItem } from '@/types';
import { ref } from 'vue';
import { useRequest } from '@/lib/sdk';

export function useComments(projectId: string, user: Ref<PulseKitUser | null>, feedbackItems: Ref<FeedbackItem[]>) {
    const error = ref<string | null>(null);
    const request = useRequest(projectId, user.value);

    // Add comment to feedback
    async function addComment(id: string, commentText: string) {
        if (!commentText.trim() || !user.value) return null;

        try {
            const updatedItem = await request(
                `/feedback/${id}/comment`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        comment: commentText,
                        userId: user.value?.id
                    })
                }
            )

            const index = feedbackItems.value.findIndex(item => item.id === id);
            if (index !== -1) {
                feedbackItems.value[index] = updatedItem;
            }
            return updatedItem;
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to add comment';
            return null;
        }
    }

    return {
        error,
        addComment
    };
} 