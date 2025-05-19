<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { getFeedbackItems, submitFeedback, voteFeedback, commentFeedback } from '@/lib/requests';
import { SDK } from '@/lib/sdk';
import type { PulseKitUser } from '@/lib/sdk';
import type { FeedbackItem } from './types';
import Feedback from './feedback.vue';

const feedbackItems = ref<FeedbackItem[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);
const newFeedbackTitle = ref('');
const newFeedback = ref('');
const activeTab = ref('all');

// Check SDK initialization
const isInitialized = ref(false);

// Get current user
const currentUser = computed<PulseKitUser | null>(() => {
    const state = SDK.getState();
    return state.user;
});

// Check if the user is identified
const isIdentified = computed(() => {
    return !!currentUser.value;
});

// Check if board is in readonly mode
const isReadonly = computed(() => {
    return !isIdentified.value;
});

// Load feedback items
async function loadFeedback() {
    if (!isInitialized.value) {
        error.value = 'SDK not initialized. Please call PulseKit.init() first.';
        loading.value = false;
        return;
    }

    try {
        loading.value = true;
        error.value = null;
        feedbackItems.value = await getFeedbackItems();
    } catch (err) {
        error.value = err instanceof Error ? err.message : 'Failed to load feedback';
    } finally {
        loading.value = false;
    }
}

// Submit new feedback
async function submit() {
    if (!newFeedback.value.trim() || isReadonly.value) return;

    try {
        const data = {
            title: newFeedbackTitle.value,
            content: newFeedback.value,
            userId: currentUser.value?.id,
        };

        const result = await submitFeedback(data);
        feedbackItems.value = [result, ...feedbackItems.value];
        newFeedback.value = '';
    } catch (err) {
        error.value = err instanceof Error ? err.message : 'Failed to submit feedback';
    }
}

// Vote on feedback
async function vote(id: string, voteValue: number) {
    if (isReadonly.value) return;

    try {
        const updatedItem = await voteFeedback(id);

        const index = feedbackItems.value.findIndex(item => item.id === id);
        if (index !== -1) {
            feedbackItems.value[index] = {
                ...feedbackItems.value[index],
                votes: updatedItem.feedback.votes,
                userVote: updatedItem.feedback.userVote,
            }
        }
    } catch (err) {
        error.value = err instanceof Error ? err.message : 'Failed to vote';
    }
}

// Add comment to feedback
async function addComment(id: string, commentText: string) {
    if (!commentText.trim() || isReadonly.value) return;

    try {
        const updatedItem = await commentFeedback(id, commentText);
        const index = feedbackItems.value.findIndex(item => item.id === id);
        if (index !== -1) {
            feedbackItems.value[index] = updatedItem;
        }
    } catch (err) {
        error.value = err instanceof Error ? err.message : 'Failed to add comment';
    }
}

onMounted(() => {
    const clear = setInterval(() => {
        const state = SDK.getState();

        if (!state.initialized) {
            return;
        }

        isInitialized.value = true;
        loadFeedback();
        clearInterval(clear);
    }, 100)
});
</script>

<template>
    <div data-theme="light" class="bg-transparent font-sans text-gray-800 max-w-3xl mx-auto p-4 flex flex-col gap-4"
        v-if="isInitialized">
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-semibold m-0">Feedback Board</h2>
            <div class="flex gap-2">
                <button class="btn btn-sm" :class="activeTab === 'all' ? 'btn-primary' : 'btn-ghost'"
                    @click="activeTab = 'all'">
                    All Feedback
                </button>
                <button class="btn btn-sm" :class="activeTab === 'mine' ? 'btn-primary' : 'btn-ghost'"
                    @click="activeTab = 'mine'" :disabled="isReadonly" v-if="!isReadonly">
                    My Feedback
                </button>
            </div>
        </div>

        <div class="bg-gray-50 border border-gray-200 rounded p-3 mb-4" v-if="isReadonly">
            <div class="flex items-center gap-2">
                <span class="text-xl">ℹ️</span>
                <span class="text-sm text-gray-500">You're viewing in read-only mode.</span>
            </div>
        </div>

        <div class="flex flex-col gap-2 mb-6" v-if="!isReadonly">
            <input type="text" class="input input-bordered w-full" v-model="newFeedbackTitle" placeholder="Title" />
            <textarea class="textarea textarea-bordered w-full" v-model="newFeedback"
                placeholder="Share your feedback or suggestions..."></textarea>
            <button class="btn btn-primary self-end" @click="submit" :disabled="!newFeedback.trim()">
                Submit
            </button>
        </div>

        <div v-if="error" class="bg-red-50 text-red-800 p-4 rounded mb-4 flex flex-col gap-2">
            {{ error }}
            <button @click="loadFeedback" class="btn btn-sm btn-error self-end">Try Again</button>
        </div>

        <div v-else-if="loading" class="text-center py-8 text-gray-500">
            Loading feedback...
        </div>

        <div v-else-if="feedbackItems.length === 0" class="text-center py-8 text-gray-500">
            No feedback items yet.
            <span v-if="!isReadonly">Be the first to share your thoughts!</span>
        </div>

        <div v-else class="flex flex-col gap-4">
            <Feedback v-for="item in feedbackItems" :key="item.id" :feedback="item" :is-readonly="isReadonly"
                :current-user="currentUser" @vote="vote" @add-comment="addComment" />
        </div>

        <a class="btn btn-primary btn-sm btn-outline" href="https://pulsekit.com">
            Powered by PulseKit
        </a>
    </div>
</template>

<style>
/* These styles will be encapsulated in the shadow DOM */
@import "tailwindcss";

@plugin "daisyui" {
    themes: all;
}
</style>