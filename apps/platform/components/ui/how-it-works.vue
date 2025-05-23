<script setup lang="ts">
import { codeToHtml } from 'shiki'
import { UserPlus, Code2, Palette, Zap } from 'lucide-vue-next';

const steps = [
    {
        icon: UserPlus,
        title: "Sign Up",
        description: "Create your free PulseKit account and get your unique project key instantly.",
    },
    {
        icon: Code2,
        title: "Embed with One Line",
        description: "Add our lightweight SDK to your app with a single line of code. Works with React, Vue, Angular, or any other framework.",
    },
    {
        icon: Palette,
        title: "That's it!",
        description: "Your users can start giving feedback right away.",
    },
]

const code = `&lt;!-- Add PulseKit to your app --&gt;
&lt;script src="https://cdn.trypulsekit.com/widget.js"&gt;&lt;/script&gt;

&lt;!-- That's it! You can start collecting feedback --&gt;
&lt;pulse-kit project="YOUR_KEY" /&gt;`.replaceAll('&lt;', '<').replaceAll('&gt;', '>')

const html = await codeToHtml(code, {
    lang: 'html',
    theme: 'aurora-x'
})
</script>

<template>
    <section id="how-it-works" class="bg-base-200 py-24">
        <div class="container mx-auto px-6 max-w-6xl">
            <div class="text-center mb-12 px-4">
                <h2 class="text-3xl md:text-5xl font-lora font-bold text-secondary mb-4">
                    How It Works
                </h2>
                <p class="text-xl font-lato text-base-content/70 max-w-2xl mx-auto">
                    PulseKit is designed for developers who value simplicity. No complex integrations, no infrastructure
                    changes.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div v-for="(step, index) in steps" :key="step.title" class="card bg-base-100 shadow-xl h-full">
                    <div class="card-body p-8">
                        <div class="badge badge-neutral mb-4 font-lora">Step {{ index + 1 }}</div>
                        <h3 class="card-title text-2xl font-bold mb-4 font-lato">{{ step.title }}</h3>
                        <p class="text-base-content/70 font-lato">{{ step.description }}</p>
                    </div>
                </div>
            </div>


            <!-- Live demo snippet -->
            <div class="mt-20 max-w-4xl mx-auto">
                <div class="mockup-code text-neutral-content bg-[#070910]">
                    <div class="pl-6">
                        <div v-html="html" />
                    </div>
                </div>

                <div class="flex items-center justify-center gap-2 mt-8">
                    <Zap class="size-5 text-warning" />
                    <p class="text-sm text-base-content/70 font-lato">
                        <span class="font-bold text-secondary">Pro tip:</span> Our widget loads async and won't impact
                        your page
                        performance
                    </p>
                </div>
            </div>
        </div>

        <div class="flex justify-center mt-16">
            <a href="https://tally.so/r/3lZypW" target="_blank"
                class="btn btn-primary font-lato btn-lg px-8 shadow-lg hover:shadow-xl transition-all">
                Join Waitlist
            </a>
        </div>
    </section>
</template>

<style global>
.mockup-code {
    & pre {
        &:before {
            margin: 0 !important;
        }
    }
}
</style>
