<script setup lang="ts">
import type { FeedbackItem } from './types';
import type { PulseKitUser } from '@/lib/sdk';
import { computed } from 'vue';

const props = defineProps<{
    feedback: FeedbackItem;
    isReadonly: boolean;
    currentUser: PulseKitUser | null;
}>();

const emit = defineEmits<{
    (e: 'vote', id: string, vote: number): void;
    (e: 'addComment', id: string, comment: string): void;
}>();

const vote = (id: string, vote: number) => {
    emit('vote', id, vote);
}

const addComment = (id: string, comment: string) => {
    emit('addComment', id, comment);
}


const hasVoted = computed(() => {
    return props.feedback.votes.some(vote => vote.userId === props.currentUser?.id);
})
</script>

<template>
    <div class="border border-gray-200 rounded-lg p-4 bg-white">
        <div class="flex justify-between mb-2 text-sm">
            <div class="flex items-center gap-2">
                <img v-if="feedback?.user?.avatar" :src="feedback?.user?.avatar" alt="User avatar"
                    class="w-8 h-8 rounded-full bg-gray-100" />
                <span v-else class="w-8 h-8 rounded-full bg-gray-100 inline-block"></span>
                <span>{{ feedback?.user?.name || feedback?.user?.email || 'Anonymous' }}</span>
            </div>
            <div class="text-gray-400">{{ new Date(feedback.createdAt).toLocaleDateString() }}</div>
        </div>

        <div class="mb-4">{{ feedback.content }}</div>

        <div class="flex justify-between mt-2">
            <div class="flex gap-2">
                <button @click="vote(feedback.id, 1)" :disabled="isReadonly" class="btn btn-sm btn-secondary"
                    :class="{ 'btn-outline': !hasVoted }">
                    👍 {{ feedback.votes.length || 0 }}
                </button>
            </div>

            <button @click="feedback.showComments = !feedback.showComments" class="btn btn-sm btn-ghost">
                {{ feedback.comments && feedback.comments.length ?
                    `Comments (${feedback.comments.length})` :
                    'View Comments' }}
            </button>
        </div>

        <div v-if="feedback.showComments" class="mt-4 pt-4 border-t border-gray-100">
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
                <textarea class="textarea textarea-bordered text-sm w-full" v-model="feedback.newComment"
                    placeholder="Add a comment..."></textarea>
                <button class="btn btn-sm btn-primary self-end"
                    @click="addComment(feedback.id, feedback.newComment || ''); feedback.newComment = ''">
                    Submit
                </button>
            </div>
        </div>
    </div>
</template>