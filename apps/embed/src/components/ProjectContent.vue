<script setup lang="ts" async>
import { computed, ref } from 'vue';
import FeedbackSection from './FeedbackSection.vue';
import FeedbackForm from './FeedbackForm.vue';
import ErrorBoundary from './ErrorBoundary.vue';
import { useUser } from '@/composables/useUser';
import { useState } from '@/composables/useState';
import { useProject } from '@/composables/useProject';

const props = defineProps<{
    projectId: string;
    user?: string | null;
}>();

const { setProjectId, setUser } = useState();
const { isReadonly, identifyUser } = useUser();
const { project, loadProject } = useProject();

// Set project ID and load project data
setProjectId(props.projectId);
await loadProject();

if (!project.value) {
    throw new Error('Failed to load project');
}

// Handle user identification if provided
if (props.user) {
    const userData = JSON.parse(props.user);
    setUser(userData);
    await identifyUser(userData);
}

const link = computed(() => {
    return `https://trypulsekit.com/?utm_source=pulsekit-embed&utm_medium=${props.projectId}&utm_campaign=powered-by`
});

const feedbackKey = ref(0);

function retryFeedback() {
    feedbackKey.value++;
}
</script>

<template>
    <div :data-theme="project?.theme || 'light'" class="bg-transparent">
        <!-- Read-only notice with responsive spacing -->
        <div class="bg-base-200/80 shadow-sm border border-base-300 rounded-lg p-3 @md:p-4 mb-3 @md:mb-4"
            v-if="isReadonly">
            <div class="flex items-center gap-2">
                <span class="text-lg @md:text-xl">ℹ️</span>
                <span class="text-xs @md:text-sm text-base-content/50">You're viewing in read-only mode.</span>
            </div>
        </div>

        <!-- Main content layout - responsive based on container size -->
        <div class="flex flex-col @lg:flex-row gap-4 @lg:gap-6">
            <!-- Form section - full width on mobile, sidebar on desktop -->
            <div class="@lg:w-80 @lg:flex-shrink-0">
                <div class="@lg:sticky @lg:top-0">
                    <FeedbackForm :disabled="isReadonly" :is-readonly="isReadonly" />
                </div>
            </div>

            <!-- Feedback list section -->
            <div class="flex-1 min-w-0">
                <ErrorBoundary fallback="Failed to load feedback" :retry-action="retryFeedback">
                    <Suspense :key="feedbackKey">
                        <template #default>
                            <FeedbackSection :is-readonly="isReadonly" />
                        </template>
                        <template #fallback>
                            <div class="text-center py-8 @md:py-12 text-primary/50">
                                <div class="text-sm @md:text-base">Loading feedback...</div>
                            </div>
                        </template>
                    </Suspense>
                </ErrorBoundary>
            </div>
        </div>

        <!-- Powered by link with responsive sizing -->
        <div class="mt-6 @md:mt-8 pt-4 @md:pt-6 border-t border-base-300 flex justify-center">
            <a class="btn btn-secondary btn-xs @md:btn-sm" :href="link" target="_blank">
                Powered by PulseKit
            </a>
        </div>
    </div>
</template>