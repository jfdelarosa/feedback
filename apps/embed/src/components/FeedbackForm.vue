<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    isReadonly: boolean;
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
    <div class="flex flex-col gap-2 mb-6" v-if="!isReadonly">
        <input type="text" class="input input-bordered w-full" v-model="title" placeholder="Title" />
        <textarea class="textarea textarea-bordered w-full" v-model="content"
            placeholder="Share your feedback or suggestions..."></textarea>
        <button class="btn btn-primary self-end" @click="submit" :disabled="!content.trim()">
            Submit
        </button>
    </div>
</template>