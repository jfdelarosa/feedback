import type { PulseKitUser } from '@/types';
import { useState } from '@/composables/useState';

/**
 * Make an API request
 * 
 * @param endpoint - API endpoint
 * @param options - Fetch options
 * @param projectId - Project ID (UUID)
 * @param user - User info
 * @returns Promise with the API response
 */
export async function request(
    endpoint: string,
    options: RequestInit = {},
    projectId: string,
    user?: PulseKitUser | null,
) {
    const baseUrl = import.meta.env.VITE_API_URL;


    if (!projectId) {
        throw new Error('PulseKit: Project ID is required for making requests');
    }

    const url = `${baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

    const headers = new Headers(options.headers);
    headers.set('X-PulseKit-Project', projectId);
    headers.set('Content-Type', 'application/json');

    if (user) {
        headers.set('X-PulseKit-User', JSON.stringify(user));
    }

    try {
        const response = await fetch(url, {
            ...options,
            headers,
        });

        if (!response.ok) {
            throw new Error(`PulseKit API Error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('PulseKit: API request failed', error);
        throw error;
    }
}

export function useRequest() {
    return async (endpoint: string, options: RequestInit = {}) => {
        const { user, projectId } = useState();

        return request(endpoint, options, projectId.value!, user.value);
    }
}

// Export the request function directly
export { request as SDK }; 