<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { getFeedbackItems, submitFeedback, voteFeedback, commentFeedback } from '@/lib/requests';
import { SDK } from '@/lib/sdk';

interface FeedbackItem {
    id: string;
    content: string;
    userId: string;
    userName?: string;
    userAvatar?: string;
    createdAt: string;
    upvotes: number;
    downvotes: number;
    userVote?: number;
    comments: FeedbackComment[];
    showComments?: boolean;
    newComment?: string;
}

interface FeedbackComment {
    id: string;
    content: string;
    userId: string;
    userName?: string;
    userAvatar?: string;
    createdAt: string;
}

const feedbackItems = ref<FeedbackItem[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);
const newFeedback = ref('');
const activeTab = ref('all');

// Check SDK initialization
const isInitialized = computed(() => {
    const state = SDK.getState();
    return state.initialized;
});

// Get current user
const currentUser = computed(() => {
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
            content: newFeedback.value,
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
        const updatedItem = await voteFeedback(id, voteValue);
        const index = feedbackItems.value.findIndex(item => item.id === id);
        if (index !== -1) {
            feedbackItems.value[index] = updatedItem;
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
    loadFeedback();
});
</script>

<template>
    <div class="font-sans text-gray-800 max-w-3xl mx-auto p-4 flex flex-col gap-4" v-if="isInitialized">
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
            <div v-for="item in feedbackItems" :key="item.id" class="border border-gray-200 rounded-lg p-4 bg-white"
                v-show="activeTab === 'all' || (activeTab === 'mine' && currentUser && item.userId === currentUser.id)">
                <div class="flex justify-between mb-2 text-sm">
                    <div class="flex items-center gap-2">
                        <img v-if="item.userAvatar" :src="item.userAvatar" alt="User avatar"
                            class="w-8 h-8 rounded-full bg-gray-100" />
                        <span v-else class="w-8 h-8 rounded-full bg-gray-100 inline-block"></span>
                        <span>{{ item.userName || 'Anonymous' }}</span>
                    </div>
                    <div class="text-gray-400">{{ new Date(item.createdAt).toLocaleDateString() }}</div>
                </div>

                <div class="mb-4">{{ item.content }}</div>

                <div class="flex justify-between mt-2">
                    <div class="flex gap-2">
                        <button @click="vote(item.id, 1)" :class="{ 'bg-gray-100 font-semibold': item.userVote === 1 }"
                            :disabled="isReadonly" class="btn btn-sm btn-outline">
                            👍 {{ item.upvotes || 0 }}
                        </button>
                        <button @click="vote(item.id, -1)"
                            :class="{ 'bg-gray-100 font-semibold': item.userVote === -1 }" :disabled="isReadonly"
                            class="btn btn-sm btn-outline">
                            👎 {{ item.downvotes || 0 }}
                        </button>
                    </div>

                    <button @click="item.showComments = !item.showComments" class="btn btn-sm btn-ghost">
                        {{ item.comments && item.comments.length ?
                            `Comments (${item.comments.length})` :
                            'View Comments' }}
                    </button>
                </div>

                <div v-if="item.showComments" class="mt-4 pt-4 border-t border-gray-100">
                    <div v-for="comment in item.comments" :key="comment.id"
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
                        <textarea class="textarea textarea-bordered text-sm w-full" v-model="item.newComment"
                            placeholder="Add a comment..."></textarea>
                        <button class="btn btn-sm btn-primary self-end"
                            @click="addComment(item.id, item.newComment || ''); item.newComment = ''">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <a class="btn btn-primary btn-sm btn-outline" href="https://pulsekit.com">
            Powered by PulseKit
        </a>
    </div>
</template>