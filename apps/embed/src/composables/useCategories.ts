import { ref } from 'vue';
import { useRequest } from '@/lib/sdk';
import type { Category } from '@/types';

const categories = ref<Category[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

export function useCategories() {
    const request = useRequest();

    // Load categories
    async function loadCategories() {
        try {
            loading.value = true;
            error.value = null;

            const data = await request('/categories');
            categories.value = data;
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to load categories';
        } finally {
            loading.value = false;
        }
    }

    return {
        categories,
        loading,
        error,
        loadCategories,
    };
} 