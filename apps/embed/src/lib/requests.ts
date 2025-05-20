import { request } from './sdk';
import type { PulseKitUser } from './sdk';

/**
 * Identify a user
 * @param projectId - Project ID (UUID)
 * @param user - User info
 * @returns Promise with the identified user
 */
export async function identify(
    projectId: string,
    user: PulseKitUser,
) {
    return request('/identify', {
        method: 'POST',
        body: JSON.stringify(user)
    }, projectId, user);
}

/**
 * Get feedback items from the API
 * @param projectId - Project ID (UUID)
 * @param user - User info (optional)
 * @param baseUrl - Base URL (optional)
 * @returns Promise with feedback items
 */
export async function getFeedbackItems(
    projectId: string,
    user?: PulseKitUser | null,
) {
    const userId = user?.id;

    return request(
        `/feedback${userId ? `?userId=${userId}` : ''}`,
        {},
        projectId,
        user,
    );
}

/**
 * Submit new feedback
 * @param data - Feedback data
 * @param projectId - Project ID (UUID)
 * @param user - User info (optional)
 * @returns Promise with the created feedback item
 */
export async function submitFeedback(
    data: any,
    projectId: string,
    user?: PulseKitUser | null,
) {
    return request(
        '/feedback',
        {
            method: 'POST',
            body: JSON.stringify(data)
        },
        projectId,
        user,
    );
}

/**
 * Vote on a feedback item
 * @param id - Feedback item ID
 * @param projectId - Project ID (UUID)
 * @param user - User info (optional)
 * @returns Promise with the updated feedback item
 */
export async function voteFeedback(
    id: string,
    projectId: string,
    user?: PulseKitUser | null,
) {
    const userId = user?.id;

    return request(
        `/feedback/${id}/vote`,
        {
            method: 'POST',
            body: JSON.stringify({
                userId
            })
        },
        projectId,
        user,
    );
}

/**
 * Comment on a feedback item
 * @param id - Feedback item ID
 * @param comment - Comment content
 * @param projectId - Project ID (UUID)
 * @param user - User info (optional)
 * @returns Promise with the updated feedback item
 */
export async function commentFeedback(
    id: string,
    comment: string,
    projectId: string,
    user?: PulseKitUser | null,
) {
    const userId = user?.id;

    return request(
        `/feedback/${id}/comment`,
        {
            method: 'POST',
            body: JSON.stringify({
                comment,
                userId
            })
        },
        projectId,
        user,
    );
}
