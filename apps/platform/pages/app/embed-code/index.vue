<script setup lang="ts">
import { steps as defaultSteps } from '../../../utils/instructions/default';
import { steps as nextjsSteps } from '../../../utils/instructions/nextjs';
import { steps as nuxtSteps } from '../../../utils/instructions/nuxt3';
import { steps as sveltekitSteps } from '../../../utils/instructions/sveltekit';

definePageMeta({
    layout: 'dashboard'
})

const apiClient = useApi()

const tabs = [
    {
        name: 'Vanilla JS',
        steps: defaultSteps
    },
    {
        name: 'Next.js',
        steps: nextjsSteps
    },
    {
        name: 'Nuxt 3',
        steps: nuxtSteps
    },
    {
        name: 'SvelteKit',
        steps: sveltekitSteps
    }
]

const { data: project } = useLazyAsyncData('project', async () => {
    const req = await apiClient.api.project.default.$get()

    return req.json()
})

function parseHtml(html: string) {
    return html.replace(/<AppInlineCode>(.*?)<\/AppInlineCode>/g, '<code class="bg-base-300 px-1 py-0.5 rounded-md font-mono">$1</code>');
}


function parseCode(code: string) {
    if (project.value) {
        code = code.replaceAll('PROJECT_KEY', project.value?.id);
    }

    // split each line
    const lines = code.split('\n');

    return lines
}
</script>



<template>
    <div class="space-y-4">
        <AppTitle>Developer Guide</AppTitle>

        <div class="card shadow shadow-base-200 bg-white col-span-3">
            <div class="card-body">
                <h2 class="card-title text-secondary text-base mb-2">
                    Quick Start Guide
                </h2>

                <div class="tabs tabs-lift">

                    <template v-for="(tab, index) in tabs" :key="tab.name">

                        <input type="radio" name="my_tabs_3" class="tab" :aria-label="tab.name"
                            :checked="index === 0" />
                        <div class="tab-content bg-base-100 border-base-300 p-6 space-y-10">
                            <div v-for="step in tab.steps" :key="step.description" class="space-y-4">
                                <p v-html="parseHtml(step.description)" />
                                <div class="mockup-code text-xs bg-primary text-primary-content w-full">
                                    <pre v-for="line in parseCode(step.code)" :key="line"><code v-text="line" /></pre>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>