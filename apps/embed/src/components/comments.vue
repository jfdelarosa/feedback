<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    feedback: any;
    isReadonly: boolean;
}>();

const emit = defineEmits<{
    (e: 'addComment', comment: string): void;
}>();

const newComment = ref('');

function addComment() {
    emit('addComment', newComment.value);

    newComment.value = '';
};
</script>

<template>
    <div class="p-4 border-t border-gray-100 bg-base-200/80">
        <div v-for="comment in feedback.comments" :key="comment.id"
            class="mb-4 pb-4 border-b border-gray-50 last:border-0">
            <div class="flex items-center gap-2 text-xs mb-1">
                <img v-if="comment.userAvatar" :src="comment.userAvatar" alt="User avatar"
                    class="w-6 h-6 rounded-full bg-gray-100" />
                <span v-else class="w-6 h-6 rounded-full bg-gray-100 inline-block"></span>
                <span>{{ comment.userName || 'Anonymous' }}</span>
            </div>
            <div class="pl-8 text-sm">{{ comment.content }}</div>
        </div>

        <div class="flex flex-col gap-2" v-if="!isReadonly">
            <textarea class="textarea textarea-bordered text-sm w-full" v-model="newComment"
                placeholder="Add a comment..."></textarea>
            <button class="btn btn-sm btn-primary self-end" @click="addComment">
                Submit
            </button>
        </div>
    </div>
</template>