import type { PulseKitUser } from '@/types';
import { ref, computed } from 'vue';
import { useRequest } from '@/lib/sdk';

export function useUser(projectId: string, initialUser?: PulseKitUser | null) {
    const currentUser = ref<PulseKitUser | null>(initialUser || null);
    const error = ref<string | null>(null);
    const request = useRequest(projectId, initialUser);

    // Check if the user is identified
    const isIdentified = computed(() => {
        return !!currentUser.value;
    });

    // Check if board is in readonly mode
    const isReadonly = computed(() => {
        return !isIdentified.value;
    });

    // Identify user
    async function identifyUser() {
        try {
            const res = await request('/identify', {
                method: 'POST',
                body: JSON.stringify(initialUser)
            })
            currentUser.value = res.user;
            return res.user;
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to identify user';
            return null;
        }
    }

    return {
        currentUser,
        error,
        isIdentified,
        isReadonly,
        identifyUser
    };
} 