<script setup lang="ts">
import { X, Check } from 'lucide-vue-next';

const problems = [
    "Users abandon external feedback portals due to login friction",
    "Valuable insights get lost in support tickets and emails",
    "Product teams struggle to prioritize feature requests",
    "Context switching reduces user engagement"
];

const solutions = [
    "Embed feedback collection directly in your app",
    "Centralize all feedback in one organized dashboard",
    "Let users vote to validate feature priorities",
    "Keep users engaged with zero friction feedback"
];
</script>

<template>
    <section id="problem-solution" class="py-20 bg-base-100">
        <div class="container mx-auto px-6 max-w-6xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-lora font-bold text-secondary mb-4">
                    The Feedback Dilemma SaaS Teams Face
                </h2>
                <p class="text-xl font-lato text-base-content/70 max-w-3xl mx-auto">
                    Traditional feedback tools create friction
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8 items-center justify-center">
                <!-- Problems -->
                <div class="space-y-4 bg-white border border-base-200 rounded-xl px-4 py-8 shadow shadow-base-200">
                    <div class="text-center md:text-left mb-8">
                        <img src="/landing/cross.png" alt="PulseKit" class="w-20 mx-auto md:mx-0" />

                        <!-- <div class="badge badge-error badge-lg mb-4">The Problem</div> -->
                        <h3 class="text-2xl font-bold text-secondary font-lato">What's Broken Today</h3>
                    </div>
                    <div v-for="(problem, index) in problems" :key="`problem-${index}`" class="flex items-center gap-4">
                        <X class="size-5 text-secondary/50" />
                        <p class="text-primary text-sm font-lato flex-1">{{ problem }}</p>
                    </div>
                </div>

                <!-- Solutions -->
                <div class="space-y-4 bg-white border border-base-200 rounded-xl px-4 py-8 shadow shadow-base-200">
                    <div class="text-center md:text-left mb-8">
                        <img src="/landing/check.png" alt="PulseKit" class="w-20 mx-auto md:mx-0" />

                        <!-- <div class="badge badge-success badge-lg mb-4">The Solution</div> -->
                        <h3 class="text-2xl font-bold text-success font-lato">How PulseKit Fixes It</h3>
                    </div>
                    <div v-for="(solution, index) in solutions" :key="`solution-${index}`"
                        class="flex items-center gap-4">
                        <Check class="size-5 text-green-500" />
                        <p class="text-primary text-base font-lato font-semibold flex-1">{{ solution }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>