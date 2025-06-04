<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue';

const props = defineProps<{
    fallback?: string;
    retryAction?: () => void;
}>();

const error = ref<Error | null>(null);

onErrorCaptured((err) => {
    error.value = err;
    return false; // Prevent the error from propagating further
});

function retry() {
    error.value = null;
    if (props.retryAction) {
        props.retryAction();
    }
}
</script>

<template>
    <div v-if="error" class="bg-error/10 text-error p-3 @md:p-4 rounded mb-3 @md:mb-4 flex flex-col gap-2">
        {{ props.fallback || error.message }}
        <button v-if="retryAction" @click="retry" class="btn btn-sm btn-error self-end">
            Try Again
        </button>
    </div>
    <slot v-else />
</template>