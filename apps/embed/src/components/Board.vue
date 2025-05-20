<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { PulseKitUser } from '@/types';
import Feedback from './feedback.vue';
import FeedbackForm from './FeedbackForm.vue';
import BoardHeader from './BoardHeader.vue';
import { useFeedback } from '@/composables/useFeedback';
import { useComments } from '@/composables/useComments';
import { useUser } from '@/composables/useUser';

// Define props
const props = defineProps<{
    projectId: string; // UUID for the project
    user?: PulseKitUser | null;
}>();

const activeTab = ref('all');

// Set up user management
const {
    currentUser,
    isReadonly,
    identifyUser
} = useUser(props.projectId, props.user);

// Set up feedback management
const {
    feedbackItems,
    loading,
    error,
    loadFeedback,
    submitNewFeedback,
    voteOnFeedback
} = useFeedback(props.projectId, currentUser);

// Set up comments management
const {
    addComment
} = useComments(props.projectId, currentUser, feedbackItems);

// Handle form submission
async function handleSubmit(title: string, content: string) {
    await submitNewFeedback(title, content);
}

// Handle tab changes
function updateTab(tab: string) {
    activeTab.value = tab;
}

// Watch for changes to projectId or user and reload feedback
onMounted(
    async () => {
        if (props.user) {
            await identifyUser();
        }

        loadFeedback();
    }
);
</script>

<template>
    <div data-theme="light" class="bg-transparent font-sans text-gray-800 max-w-3xl mx-auto p-4 flex flex-col gap-4">
        <BoardHeader :active-tab="activeTab" :is-readonly="isReadonly" @update-tab="updateTab" />

        <div class="bg-gray-50 border border-gray-200 rounded p-3 mb-4" v-if="isReadonly">
            <div class="flex items-center gap-2">
                <span class="text-xl">ℹ️</span>
                <span class="text-sm text-gray-500">You're viewing in read-only mode.</span>
            </div>
        </div>

        <FeedbackForm :is-readonly="isReadonly" @submit="handleSubmit" />

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
                :current-user="currentUser" @vote="voteOnFeedback" @add-comment="addComment" />
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