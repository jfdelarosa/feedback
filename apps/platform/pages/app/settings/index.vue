<script setup lang="ts">
import { steps as defaultSteps } from '../../../utils/instructions/default';
import { steps as nextjsSteps } from '../../../utils/instructions/nextjs';
import { steps as nuxtSteps } from '../../../utils/instructions/nuxt3';
import { steps as sveltekitSteps } from '../../../utils/instructions/sveltekit';

const projectKey = 'f9475d9f-c4f4-41b7-9531-c92b7525d262'

function parseHtml(html: string) {
    return html.replace(/<AppInlineCode>(.*?)<\/AppInlineCode>/g, '<code class="bg-base-300 px-1 py-0.5 rounded-md font-mono">$1</code>');
}

function parseCode(code: string) {
    code = code.replaceAll('PROJECT_KEY', projectKey);

    // split each line
    const lines = code.split('\n');

    return lines
}

const tabs = [
    {
        name: 'General',
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
</script>


<template>
    <div class="space-y-4">
        <div class="card shadow shadow-base-200 bg-white col-span-3">
            <div class="card-body">
                <h2 class="card-title text-secondary text-base">
                    General
                </h2>

                <div class="grid grid-cols-2 gap-2">
                    <fieldset class="fieldset">
                        <legend class="fieldset-legend">Project Name</legend>
                        <input type="text" class="input" placeholder="Type here" value="My Project" />
                    </fieldset>

                    <fieldset class="fieldset">
                        <legend class="fieldset-legend">Project Key</legend>
                        <input readonly type="text" class="input input-bordered w-full"
                            value="f9475d9f-c4f4-41b7-9531-c92b7525d262" />
                    </fieldset>
                </div>
            </div>
        </div>


        <div class="card shadow shadow-base-200 bg-white col-span-3">
            <div class="card-body">
                <h2 class="card-title text-secondary text-base">
                    Install instructions
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