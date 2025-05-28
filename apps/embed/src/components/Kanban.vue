<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useFeedback } from '@/composables/useFeedback';
import { useState } from '@/composables/useState';
import { useProject } from '@/composables/useProject';
import { useFormatters } from '@/composables/useFormatters';
import { vAutoAnimate } from '@formkit/auto-animate'
import type { FeedbackItem } from '@/types';

const props = defineProps<{
    projectId: string;
    user?: string | null;
}>();

const { setProjectId } = useState();
const { formatDate } = useFormatters();

// Set up project management
const {
    project,
    loading: projectLoading,
    error: projectError,
    loadProject
} = useProject();

// Set up feedback management
const {
    feedbackItems,
    loading,
    error,
    loadFeedback,
} = useFeedback();

// Define status type
type StatusType = 'open' | 'in-progress' | 'completed' | 'declined';

// Status configuration with better visual design
const statusConfig = computed(() => ({
    'open': {
        title: 'Open',
        icon: '🆕',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-700',
        badgeColor: 'badge-info'
    },
    'in-progress': {
        title: 'In Progress',
        icon: '⚡',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        textColor: 'text-yellow-700',
        badgeColor: 'badge-warning'
    },
    'completed': {
        title: 'Completed',
        icon: '✅',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-700',
        badgeColor: 'badge-success'
    },
    'declined': {
        title: 'Declined',
        icon: '❌',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        textColor: 'text-red-700',
        badgeColor: 'badge-error'
    }
} as const));

const link = computed(() => {
    return `https://trypulsekit.com/?utm_source=pulsekit-embed&utm_medium=${props.projectId}&utm_campaign=powered-by`
})

// Helper to safely get status config
const getStatusConfig = (status: string) => {
    const validStatuses: StatusType[] = ['open', 'in-progress', 'completed', 'declined'];
    if (validStatuses.includes(status as StatusType)) {
        return statusConfig.value[status as StatusType];
    }
    // Fallback for unknown status
    return {
        title: status,
        icon: '❓',
        bgColor: 'bg-gray-50',
        borderColor: 'border-gray-200',
        textColor: 'text-gray-700',
        badgeColor: 'badge-neutral'
    };
};

// Helper to handle retry actions
const handleRetryLoadFeedback = () => {
    loadFeedback({ groupBy: "status" });
};

// Initialize the app with proper sequencing
onMounted(async () => {
    // Set project ID first
    // Load project data - everything depends on this
    try {
        setProjectId(props.projectId);
        await loadProject();

        // Only proceed if project loaded successfully
        if (!project.value) {
            // Handle user identification if provided
            return;
        }

        // Load feedback data
        await loadFeedback({ groupBy: "status" });
    } catch (err) {
        console.error('Error during initialization sequence:', err);
    }
});
</script>

<template>
    <div id="pulsekit-embed" :data-theme="project?.theme || 'light'" class="@container bg-transparent">
        <div v-if="projectLoading" class="flex items-center justify-center py-8 @md:py-12">
            <div class="flex flex-col items-center gap-3">
                <div class="loading loading-spinner loading-md text-primary"></div>
                <div class="text-sm text-primary/70">Loading project...</div>
            </div>
        </div>

        <div v-else-if="projectError"
            class="bg-error/10 text-error p-4 @md:p-6 rounded-xl border border-error/20 flex flex-col gap-3 max-w-md mx-auto">
            <div class="flex items-center gap-2">
                <span class="text-lg">⚠️</span>
                <span class="font-medium">Failed to load project</span>
            </div>
            <p class="text-sm opacity-90">{{ projectError }}</p>
            <button @click="loadProject" class="btn btn-sm btn-error self-end">
                <span class="text-xs">🔄</span>
                Try Again
            </button>
        </div>

        <div v-else-if="project" class="text-primary">
            <!-- Header -->
            <div class="mb-6 @md:mb-8">
                <h2 class="text-lg @md:text-xl font-semibold text-primary mb-2">
                    Feedback Board
                </h2>
                <p class="text-sm @md:text-base text-primary/70">
                    Track the progress of feature requests and improvements
                </p>
            </div>

            <!-- Error state -->
            <div v-if="error"
                class="bg-error/10 text-error p-4 @md:p-6 rounded-xl border border-error/20 flex flex-col gap-3 mb-6">
                <div class="flex items-center gap-2">
                    <span class="text-lg">⚠️</span>
                    <span class="font-medium">Failed to load feedback</span>
                </div>
                <p class="text-sm opacity-90">{{ error }}</p>
                <button @click="handleRetryLoadFeedback" class="btn btn-sm btn-error self-end">
                    <span class="text-xs">🔄</span>
                    Try Again
                </button>
            </div>

            <!-- Loading state -->
            <div v-else-if="loading" class="flex items-center justify-center py-12 @md:py-16">
                <div class="flex flex-col items-center gap-4">
                    <div class="loading loading-spinner loading-lg text-primary"></div>
                    <div class="text-sm @md:text-base text-primary/70">Loading feedback...</div>
                </div>
            </div>

            <!-- Empty state -->
            <div v-else-if="!feedbackItems || Object.keys(feedbackItems).length === 0"
                class="flex flex-col items-center justify-center py-12 @md:py-16 text-center">
                <div class="text-4xl @md:text-5xl mb-4 opacity-50">📝</div>
                <div class="text-lg @md:text-xl font-medium text-primary mb-2">
                    No feedback yet
                </div>
                <div class="text-sm @md:text-base text-primary/70 max-w-md">
                    When users submit feedback, it will appear here organized by status.
                </div>
            </div>

            <!-- Kanban Board -->
            <div v-else class="space-y-6 @2xl:space-y-0">
                <!-- Mobile: Stacked columns -->
                <div class="@2xl:hidden space-y-6" v-auto-animate>
                    <div v-for="(items, status) in feedbackItems" :key="status"
                        class="bg-base-100 rounded-xl border border-base-300 overflow-hidden">
                        <!-- Column Header -->
                        <div class="flex items-center justify-between p-4 border-b border-base-300"
                            :class="getStatusConfig(String(status))?.bgColor">
                            <div class="flex items-center gap-3">
                                <span class="text-lg">
                                    {{ getStatusConfig(String(status))?.icon }}
                                </span>
                                <div>
                                    <h3 class="font-semibold text-sm"
                                        :class="getStatusConfig(String(status))?.textColor">
                                        {{ getStatusConfig(String(status))?.title }}
                                    </h3>
                                </div>
                            </div>
                            <div class="badge badge-sm" :class="getStatusConfig(String(status))?.badgeColor">
                                {{ Array.isArray(items) ? items.length : 0 }}
                            </div>
                        </div>

                        <!-- Cards -->
                        <div class="p-3 space-y-3" v-auto-animate>
                            <div v-for="item in (Array.isArray(items) ? items : [])" :key="item.id"
                                class="bg-base-200 hover:bg-base-300 transition-colors duration-200 p-4 rounded-lg border border-base-300 hover:border-primary/20 group">
                                <!-- Card Header -->
                                <div class="flex items-start justify-between gap-3 mb-3">
                                    <h4
                                        class="font-medium text-sm leading-relaxed flex-1 group-hover:text-primary transition-colors">
                                        {{ (item as FeedbackItem).title }}
                                    </h4>
                                    <div class="badge badge-xs opacity-60">
                                        {{ formatDate((item as FeedbackItem).createdAt) }}
                                    </div>
                                </div>

                                <!-- Card Content -->
                                <p
                                    class="text-xs text-primary/70 leading-relaxed mb-4 line-clamp-2 whitespace-pre-wrap">
                                    {{ (item as FeedbackItem).content }}
                                </p>

                                <!-- Card Footer -->
                                <div class="flex items-center justify-between">
                                    <!-- User Info -->
                                    <div class="flex items-center gap-2">
                                        <div class="avatar">
                                            <div class="w-5 h-5 rounded-full bg-primary/10">
                                                <img v-if="(item as FeedbackItem).user?.avatar"
                                                    :src="(item as FeedbackItem).user.avatar"
                                                    :alt="(item as FeedbackItem).user.name"
                                                    class="w-full h-full object-cover rounded-full" />
                                                <div v-else
                                                    class="w-full h-full flex items-center justify-center text-xs text-primary/50">
                                                    👤
                                                </div>
                                            </div>
                                        </div>
                                        <span class="text-xs text-primary/60 font-medium">
                                            {{ (item as FeedbackItem).user?.name || (item as FeedbackItem).user?.email
                                                || 'Anonymous' }}
                                        </span>
                                    </div>

                                    <!-- Metrics (read-only) -->
                                    <div class="flex items-center gap-3 text-xs text-primary/50">
                                        <span class="flex items-center gap-1">
                                            💬 {{ (item as FeedbackItem).comments || 0 }}
                                        </span>
                                        <span class="flex items-center gap-1">
                                            👍 {{ (item as FeedbackItem).votes?.length || 0 }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <!-- Empty column state -->
                            <div v-if="!Array.isArray(items) || items.length === 0"
                                class="text-center py-8 text-primary/50">
                                <div class="text-2xl mb-2 opacity-50">📭</div>
                                <div class="text-xs">No items in this status</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Desktop: Side-by-side columns -->
                <div class="hidden @2xl:grid @2xl:grid-cols-4 @2xl:gap-4" v-auto-animate>
                    <div v-for="(items, status) in feedbackItems" :key="status"
                        class="bg-base-100 rounded-xl border border-base-300 overflow-hidden min-h-96">
                        <!-- Column Header -->
                        <div class="sticky top-0 bg-base-100 border-b border-base-300 p-4"
                            :class="getStatusConfig(String(status))?.bgColor">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <span class="text-lg">
                                        {{ getStatusConfig(String(status))?.icon }}
                                    </span>
                                    <h3 class="font-semibold text-sm"
                                        :class="getStatusConfig(String(status))?.textColor">
                                        {{ getStatusConfig(String(status))?.title }}
                                    </h3>
                                </div>
                                <div class="badge badge-sm" :class="getStatusConfig(String(status))?.badgeColor">
                                    {{ Array.isArray(items) ? items.length : 0 }}
                                </div>
                            </div>
                        </div>

                        <!-- Cards Container -->
                        <div class="p-3 space-y-3 max-h-96 overflow-y-auto" v-auto-animate>
                            <div v-for="item in (Array.isArray(items) ? items : [])" :key="item.id"
                                class="bg-base-200 hover:bg-base-300 transition-all duration-200 p-4 rounded-lg border border-base-300 hover:border-primary/20 hover:shadow-sm group cursor-pointer">
                                <!-- Card Header -->
                                <div class="flex items-start justify-between gap-2 mb-3">
                                    <h4
                                        class="font-medium text-sm leading-relaxed flex-1 group-hover:text-primary transition-colors">
                                        {{ (item as FeedbackItem).title }}
                                    </h4>
                                </div>

                                <!-- Card Content -->
                                <p class="text-xs text-primary/70 leading-relaxed mb-4 line-clamp-3">
                                    {{ (item as FeedbackItem).content }}
                                </p>

                                <!-- Card Footer -->
                                <div class="space-y-3">
                                    <!-- User Info -->
                                    <div class="flex items-center gap-2">
                                        <div class="avatar">
                                            <div class="w-4 h-4 rounded-full bg-primary/10">
                                                <img v-if="(item as FeedbackItem).user?.avatar"
                                                    :src="(item as FeedbackItem).user.avatar"
                                                    :alt="(item as FeedbackItem).user.name"
                                                    class="w-full h-full object-cover rounded-full" />
                                                <div v-else
                                                    class="w-full h-full flex items-center justify-center text-xs text-primary/50">
                                                    👤
                                                </div>
                                            </div>
                                        </div>
                                        <span class="text-xs text-primary/60 font-medium truncate">
                                            {{ (item as FeedbackItem).user?.name || (item as FeedbackItem).user?.email
                                                || 'Anonymous' }}
                                        </span>
                                    </div>

                                    <!-- Metrics & Date -->
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2 text-xs text-primary/50">
                                            <span class="flex items-center gap-1">
                                                💬 {{ (item as FeedbackItem).comments || 0 }}
                                            </span>
                                            <span class="flex items-center gap-1">
                                                👍 {{ (item as FeedbackItem).votes?.length || 0 }}
                                            </span>
                                        </div>
                                        <div class="text-xs text-primary/40">
                                            {{ formatDate((item as FeedbackItem).createdAt) }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Empty column state -->
                            <div v-if="!Array.isArray(items) || items.length === 0"
                                class="text-center py-12 text-primary/50">
                                <div class="text-3xl mb-3 opacity-30">📭</div>
                                <div class="text-xs">No items yet</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Powered by link with responsive sizing -->
            <div class="mt-8 @md:mt-12 pt-6 @md:pt-8 border-t border-base-300">
                <a class="btn btn-secondary btn-xs @md:btn-sm mx-auto block w-fit hover:btn-primary transition-colors"
                    :href="link" target="_blank">
                    <span class="text-xs mr-1">⚡</span>
                    Powered by PulseKit
                </a>
            </div>
        </div>
    </div>
</template>

<style>
/* These styles will be encapsulated in the shadow DOM */
@import "tailwindcss";

@plugin "daisyui" {
    themes: all;
    root: "#pulsekit-embed";
}

/* Custom line clamp utilities */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Smooth scrollbar for desktop columns */
.max-h-96::-webkit-scrollbar {
    width: 4px;
}

.max-h-96::-webkit-scrollbar-track {
    background: transparent;
}

.max-h-96::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
}

.max-h-96::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.2);
}
</style>