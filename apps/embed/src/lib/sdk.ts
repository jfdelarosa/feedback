/**
 * PulseKit Embed SDK
 * Provides initialization and user identification for the PulseKit feedback system
 */

// Types
export interface PulseKitOptions {
    baseUrl?: string;
    // Add other options as needed
}

export interface PulseKitUser {
    id?: string;
    externalId?: string;
    email?: string;
    name?: string;
    avatar?: string;
}

// SDK State
interface SDKState {
    initialized: boolean;
    apiKey: string | null;
    baseUrl: string;
    user: PulseKitUser | null;
}

// Default state
const state: SDKState = {
    initialized: false,
    apiKey: null,
    baseUrl: 'http://localhost:3002/public',
    user: null,
};

/**
 * Initialize the PulseKit SDK
 * @param apiKey - Your PulseKit API key
 * @param options - Configuration options
 * @returns The SDK instance for chaining
 */
export function init(apiKey: string, options: PulseKitOptions = {}): typeof SDK {
    if (!apiKey || typeof apiKey !== 'string') {
        console.error('PulseKit: API key is required and must be a string');
        return SDK;
    }

    // Set API key
    state.apiKey = apiKey;

    // Set base URL if provided
    if (options.baseUrl) {
        try {
            // Validate URL
            new URL(options.baseUrl);
            state.baseUrl = options.baseUrl;
        } catch (error) {
            console.error('PulseKit: Invalid base URL provided', error);
        }
    }

    state.initialized = true;
    return SDK;
}

/**
 * Identify the current user
 * @param user - User identification object
 * @returns The SDK instance for chaining
 */
export async function identify(user: PulseKitUser): Promise<typeof SDK> {
    if (!state.initialized) {
        console.error('PulseKit: SDK must be initialized before identifying users');
        return SDK;
    }

    if (!user || typeof user !== 'object') {
        console.error('PulseKit: User object is required');
        return SDK;
    }

    if (!user.externalId) {
        console.error('PulseKit: User ID is required');
        return SDK;
    }


    const res = await request('/identify', {
        method: 'POST',
        body: JSON.stringify(user),
    })

    // Store user information
    state.user = res.user;

    return SDK;
}

/**
 * Get the current SDK state
 * @returns Information about the current SDK state
 */
export function getState() {
    return {
        initialized: state.initialized,
        user: state.user ? { ...state.user } : null,
        baseUrl: state.baseUrl,
    };
}

/**
 * Make an authenticated API request
 * @param endpoint - API endpoint
 * @param options - Fetch options
 * @returns Promise with the API response
 */
export async function request(endpoint: string, options: RequestInit = {}) {
    if (!state.initialized) {
        throw new Error('PulseKit: SDK must be initialized before making requests');
    }

    const url = `${state.baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

    const headers = new Headers(options.headers);
    headers.set('Authorization', `Bearer ${state.apiKey}`);
    headers.set('Content-Type', 'application/json');

    if (state.user) {
        headers.set('X-PulseKit-User', JSON.stringify(state.user));
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

// SDK object
export const SDK = {
    init,
    identify,
    getState,
    request,
    version: '1.0.0',
}; 