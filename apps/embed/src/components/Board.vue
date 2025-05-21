<script setup lang="ts">
import { onMounted, computed, nextTick } from 'vue';
import type { PulseKitUser } from '@/types';
import Feedback from './feedback.vue';
import FeedbackForm from './FeedbackForm.vue';
import { useFeedback } from '@/composables/useFeedback';
import { useUser } from '@/composables/useUser';
import { useState } from '@/composables/useState';
import { vAutoAnimate } from '@formkit/auto-animate'

const props = defineProps<{
    projectId: string;
    user?: string | null;
}>();

const { setProjectId, setUser } = useState();

// Set up user management
const {
    isReadonly,
    identifyUser
} = useUser();

// Set up feedback management
const {
    feedbackItems,
    loading,
    error,
    loadFeedback,
} = useFeedback();


const link = computed(() => {
    return `https://trypulsekit.com/?utm_source=pulsekit-embed&utm_medium=${props.projectId}&utm_campaign=powered-by`
})

// Watch for changes to projectId or user and reload feedback
onMounted(
    async () => {
        setProjectId(props.projectId)

        if (props.user) {
            setUser(JSON.parse(props.user))

            identifyUser(JSON.parse(props.user));
        }

        nextTick(() => {
            loadFeedback();
        })
    }
);
</script>

<template>
    <div data-theme="light" class="bg-transparent text-primary flex flex-col gap-4">
        <div class="bg-base-200/80 shadow-sm border border-base-300 rounded-lg p-3 mb-4" v-if="isReadonly">
            <div class="flex items-center gap-2">
                <span class="text-xl">ℹ️</span>
                <span class="text-sm text-base-content/50">You're viewing in read-only mode.</span>
            </div>
        </div>

        <FeedbackForm :disabled="loading || isReadonly" :is-readonly="isReadonly" />

        <div v-if="error" class="bg-error/10 text-error p-4 rounded mb-4 flex flex-col gap-2">
            {{ error }}
            <button @click="loadFeedback" class="btn btn-sm btn-error self-end">Try Again</button>
        </div>

        <div v-else-if="loading" class="text-center py-8 text-primary/50">
            Loading feedback...
        </div>

        <div v-else-if="feedbackItems.length === 0" class="text-center py-8 text-primary/50">
            No feedback items yet.
            <span v-if="!isReadonly">Be the first to share your thoughts!</span>
        </div>

        <div v-else class="flex flex-col gap-4" v-auto-animate>
            <Feedback v-for="item in feedbackItems" :key="item.id" :feedback="item" :is-readonly="isReadonly"
                v-model:show-comments="item.showComments" />
        </div>

        <a class="btn btn-secondary btn-xs self-center" :href="link" target="_blank">
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