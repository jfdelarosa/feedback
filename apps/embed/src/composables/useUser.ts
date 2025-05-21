import type { PulseKitUser } from '@/types';
import { ref, computed } from 'vue';
import { useRequest } from '@/lib/sdk';
import { useState } from './useState';


export function useUser() {
    const { user, setUser } = useState();
    const error = ref<string | null>(null);

    // Check if the user is identified
    const isIdentified = computed(() => {
        return !!user.value;
    });

    // Check if board is in readonly mode
    const isReadonly = computed(() => {
        return !isIdentified.value;
    });

    // Identify user
    async function identifyUser(initialUser?: PulseKitUser | null) {
        try {
            const request = useRequest();

            const res = await request('/identify', {
                method: 'POST',
                body: JSON.stringify(initialUser)
            })

            setUser(res.user);
            return res.user;
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to identify user';
            return null;
        }
    }

    return {
        error,
        isIdentified,
        isReadonly,
        identifyUser
    };
} 