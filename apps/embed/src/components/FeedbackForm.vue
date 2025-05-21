<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    isReadonly: boolean;
    disabled: boolean;
}>();

const emit = defineEmits<{
    (e: 'submit', title: string, content: string): void;
}>();

const title = ref('');
const content = ref('');

function submit() {
    if (!content.value.trim() || props.isReadonly) return;
    emit('submit', title.value, content.value);
    title.value = '';
    content.value = '';
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
                    :disabled="!content.trim() || disabled">Submit</button>
            </div>
        </div>
    </div>
</template>