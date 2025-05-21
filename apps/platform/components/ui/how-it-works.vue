<script setup lang="ts">
const steps = [
    {
        title: "Create Your Account",
        description: "Sign up for PulseKit and receive your unique connection key. No credit card required to get started.",
    },
    {
        title: "Add PulseKit to Your Site",
        description: "Copy our ready-made script and add it to your website using your connection key. Your developer can implement this in minutes.",
    },
    {
        title: "Customize Your Board",
        description: "Configure your feedback board to match your brand and set up the categories that matter to your users.",
    },
]
</script>

<template>
    <section id="how-it-works" class="bg-base-200 py-24">
        <div class="container mx-auto px-6 max-w-6xl">
            <div class="text-center mb-12 px-4">
                <h2 class="text-3xl md:text-5xl font-lora font-bold text-secondary mb-4">
                    How It Works
                </h2>
                <p class="text-xl font-lato text-accent/80 max-w-2xl mx-auto">
                    Getting started with PulseKit is quick and simple
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div v-for="(step, index) in steps" :key="step.title" class="card bg-base-100 shadow-xl h-full">
                    <div class="card-body p-8">
                        <div class="badge badge-neutral mb-4 font-lora">Step {{ index + 1 }}</div>
                        <h3 class="card-title text-2xl font-bold mb-4">{{ step.title }}</h3>
                        <p class="text-base-content/70">{{ step.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center mt-20">
            <nuxt-link to="/sign-up" class="btn btn-accent btn-lg px-8">
                Get Started
            </nuxt-link>
        </div>
    </section>
</template>
