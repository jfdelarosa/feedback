<script setup lang="ts">
import { ref } from 'vue';
import ProjectContent from './ProjectContent.vue';
import ErrorBoundary from './ErrorBoundary.vue';

const props = defineProps<{
    projectId: string;
    user?: string | null;
}>();

const key = ref(0);

function retryProject() {
    key.value++;
}
</script>

<template>
    <div id="pulsekit-embed" class="@container bg-transparent">
        <ErrorBoundary fallback="Failed to load project" :retry-action="retryProject">
            <Suspense :key="key">
                <template #default>
                    <ProjectContent :project-id="props.projectId" :user="props.user" />
                </template>
                <template #fallback>
                    <div class="text-center py-2 @md:py-4 text-primary/50">
                        Loading project...
                    </div>
                </template>
            </Suspense>
        </ErrorBoundary>
    </div>
</template>

<style>
/* These styles will be encapsulated in the shadow DOM */
@import "tailwindcss";

@plugin "daisyui" {
    themes: all;
    root: "#pulsekit-embed";
}
</style>