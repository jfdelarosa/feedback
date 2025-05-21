<script setup lang="ts">
import { ref } from 'vue';
import { useFeedback } from '@/composables/useFeedback';

const props = defineProps<{
    isReadonly: boolean;
    disabled: boolean;
}>();

const { submitNewFeedback } = useFeedback();

const title = ref('');
const content = ref('');
const isSubmitting = ref(false);

async function submit() {
    if (!content.value.trim() || props.isReadonly || isSubmitting.value) return;

    isSubmitting.value = true;

    try {
        await submitNewFeedback(title.value, content.value);
        title.value = '';
        content.value = '';
    } finally {
        isSubmitting.value = false;
    }
}
</script>

<template>
    <div class="card card-border shadow-sm bg-base-100" v-if="!isReadonly">
        <div class="card-body p-4">
            <h2 class="card-title">Submit Feedback</h2>
            <p class="text-sm text-base-content/50">Share your feedback or suggestions...</p>

            <div>
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Title</legend>
                    <input type="text" class="input input-bordered input-sm w-full" v-model="title" />
                </fieldset>

                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Description</legend>
                    <textarea class="textarea textarea-bordered textarea-sm w-full" v-model="content"></textarea>
                </fieldset>
            </div>

            <div class="card-actions justify-end">
                <button class="btn btn-primary btn-sm" @click="submit"
                    :disabled="!content.trim() || disabled || isSubmitting">
                    <span v-if="isSubmitting">Submitting...</span>
                    <span v-else>Submit</span>
                </button>
            </div>
        </div>
    </div>
</template>