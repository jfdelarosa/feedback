<script setup lang="ts">
import { formatDistanceToNow } from "date-fns"
import type { FeedbackItem } from '../types';
import comments from './comments.vue';
import { computed } from 'vue';
import { useState } from '@/composables/useState';

const props = defineProps<{
    feedback: FeedbackItem;
    isReadonly: boolean;
}>();

const { user } = useState();

const emit = defineEmits<{
    (e: 'vote', id: string, vote: number): void;
    (e: 'addComment', id: string, comment: string): void;
}>();

const vote = (id: string, vote: number) => {
    emit('vote', id, vote);
}

const addComment = (comment: string) => {
    emit('addComment', props.feedback.id, comment);
}

const hasVoted = computed(() => {
    return props.feedback.votes.some(vote => vote.userId === user.value?.id);
})

// Relative to now, use intl
function formatDate(date: string) {
    return formatDistanceToNow(new Date(date), { addSuffix: true })
}
</script>

<template>
    <div class="card card-border bg-base-100 shadow-sm">
        <div class="card-body p-4">
            <time :title="feedback.createdAt" class="text-xs text-base-content/50">
                {{ formatDate(feedback.createdAt) }}
            </time>
            <h2 class="card-title">
                {{ feedback.title }}
            </h2>
            <p class="pb-1 text-sm">{{ feedback.content }}</p>
            <div class="card-actions justify-between items-end">
                <div class="flex items-center gap-2">
                    <img v-if="feedback?.user?.avatar" :src="feedback?.user?.avatar" alt="User avatar"
                        class="size-4 rounded-full bg-base-300" />
                    <span v-else class="size-4 rounded-full bg-base-300 inline-block"></span>
                    <span class="text-xs text-base-content/70 font-medium">{{ feedback?.user?.name ||
                        feedback?.user?.email ||
                        'Anonymous' }}</span>
                </div>

                <div class="space-x-2">
                    <button @click="feedback.showComments = !feedback.showComments"
                        class="btn btn-sm btn-outline btn-accent">
                        💬 {{ feedback.comments.length || 0 }}
                    </button>

                    <button @click="vote(feedback.id, 1)" :disabled="isReadonly" class="btn btn-sm btn-accent"
                        :class="{ 'btn-outline': !hasVoted }">
                        👍 {{ feedback.votes.length || 0 }}
                    </button>
                </div>
            </div>
        </div>

        <comments v-if="feedback.showComments" :feedback="feedback" :isReadonly="isReadonly" @addComment="addComment" />
    </div>
</template>