import { ref } from 'vue';
import { useRequest } from '@/lib/sdk';
import { useState } from './useState';

export function useComments() {
    const error = ref<string | null>(null);
    const request = useRequest();
    const { user } = useState();

    // Add comment to feedback
    async function addComment(id: string, commentText: string) {
        if (!commentText.trim() || !user.value?.id) return null;

        try {
            const { comment } = await request(
                `/feedback/${id}/comment`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        comment: commentText,
                    })
                }
            );


            return comment;
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