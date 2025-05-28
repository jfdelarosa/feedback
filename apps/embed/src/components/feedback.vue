<script setup lang="ts">
import type { FeedbackItem } from '../types';
import Comments from './comments.vue';
import { computed, ref } from 'vue';
import type { FeedbackComment } from '@/types';
import { useState } from '@/composables/useState';
import { useFeedback } from '@/composables/useFeedback';
import { useComments } from '@/composables/useComments';
import { useFormatters } from '@/composables/useFormatters';

const showComments = defineModel<boolean>("showComments");

const props = defineProps<{
    feedback: FeedbackItem;
    isReadonly: boolean;
}>();

const { formatDate } = useFormatters();
const { user } = useState();
const { addComment } = useComments();
const { loadComments, voteOnFeedback } = useFeedback();

const isLoadingComments = ref(false);

const hasVoted = computed(() => {
    return props.feedback.votes.some(vote => vote.userId === user.value?.id);
})

const comments = ref<FeedbackComment[]>([]);

// Handle toggling comments
async function toggleComments() {
    // Toggle the visibility
    if (!showComments.value && comments.value.length === 0) {
        isLoadingComments.value = true;

        try {
            const newComments = await loadComments(props.feedback.id);

            comments.value = newComments || [];
        } finally {
            isLoadingComments.value = false;
        }
    }

    // Toggle the showComments state
    showComments.value = !showComments.value;
}

// Handle comment submission with optimistic update
async function handleAddComment(commentText: string) {
    const result = await addComment(props.feedback.id, commentText);

    comments.value = [...comments.value, result];
}
</script>

<template>
    <div class="card card-border bg-base-100 shadow-sm overflow-hidden">
        <div class="card-body p-4">
            <time :title="feedback.createdAt" class="text-xs text-base-content/50">
                {{ formatDate(feedback.createdAt) }}
            </time>
            <h2 class="card-title text-primary">
                {{ feedback.title }}
            </h2>
            <p class="pb-1 text-sm text-base-content whitespace-pre-wrap">{{ feedback.content }}</p>

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
                    <button @click="toggleComments" class="btn btn-sm btn-outline btn-accent relative">
                        <div v-if="isLoadingComments"
                            class="absolute inset-0 flex items-center justify-center bg-base-100/80 rounded">
                            <span class="loading loading-spinner loading-xs"></span>
                        </div>
                        <span v-else>💬 {{ feedback.comments || 0 }}</span>
                    </button>

                    <button @click="voteOnFeedback(feedback.id, 1)" :disabled="isReadonly" class="btn btn-sm btn-accent"
                        :class="{
                            'btn-outline': !hasVoted,
                        }">
                        👍 {{ feedback.votes.length || 0 }}
                    </button>
                </div>
            </div>
        </div>

        <comments v-if="feedback.showComments" :comments="comments" :isReadonly="isReadonly"
            @addComment="handleAddComment" />
    </div>
</template>