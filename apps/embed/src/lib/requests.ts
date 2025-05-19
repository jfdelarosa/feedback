import { SDK } from './sdk';

/**
 * Get feedback items from the API
 * @returns Promise with feedback items
 */
export async function getFeedbackItems() {
    const state = SDK.getState();

    console.log('state', state.user)

    return SDK.request(`/feedback?userId=${state.user?.id}`);
}

/**
 * Submit new feedback
 * @param data - Feedback data
 * @returns Promise with the created feedback item
 */
export async function submitFeedback(data: any) {
    return SDK.request('/feedback', {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

/**
 * Vote on a feedback item
 * @param id - Feedback item ID
 * @param vote - Vote value
 * @returns Promise with the updated feedback item
 */
export async function voteFeedback(id: string) {
    const state = SDK.getState();
    return SDK.request(`/feedback/${id}/vote`, {
        method: 'POST',
        body: JSON.stringify({
            userId: state.user?.id
        })
    });
}

/**
 * Comment on a feedback item
 * @param id - Feedback item ID
 * @param comment - Comment content
 * @returns Promise with the updated feedback item
 */
export async function commentFeedback(id: string, comment: string) {
    const state = SDK.getState();
    return SDK.request(`/feedback/${id}/comment`, {
        method: 'POST',
        body: JSON.stringify({
            comment,
            userId: state.user?.id
        })
    });
}
