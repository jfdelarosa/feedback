import { ref } from 'vue';
import { useRequest } from '@/lib/sdk';

export function useComments() {
    const error = ref<string | null>(null);
    const request = useRequest();

    // Add comment to feedback
    async function addComment(id: string, commentText: string) {
        if (!commentText.trim()) return null;

        try {
            const updatedItem = await request(
                `/feedback/${id}/comment`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        comment: commentText,
                    })
                }
            )

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