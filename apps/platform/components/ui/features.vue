<script setup lang="ts">
import { MessageSquareText, Zap, Puzzle, Vote, Target, BarChart3 } from 'lucide-vue-next';

const features = [
    {
        title: "Native In-App Experience",
        description: "Embed feedback collection seamlessly into your product interface.",
        benefit: "Users never leave your app",
        icon: MessageSquareText,
    },
    {
        title: "Zero Friction Collection",
        description: "No new accounts, passwords, or verification emails required.",
        benefit: "Remove all barriers to getting honest user feedback",
        icon: Zap,
    },
    {
        title: "One-Line Integration",
        description: "Add PulseKit with a single line of code. Works with any stack.",
        benefit: "Go live in minutes, not days or weeks",
        icon: Puzzle,
    },
    {
        title: "Upvoting & Prioritization",
        description: "Let users vote on features to validate your roadmap decisions.",
        benefit: "Build what users actually want, backed by real data",
        icon: Vote,
    },
    {
        title: "Smart Categorization",
        description: "Auto-organize feedback into actionable insights and themes.",
        benefit: "Turn chaos into clarity with AI-powered organization",
        icon: Target,
    },
    {
        title: "Real-Time Analytics",
        description: "Track feedback trends, sentiment, and user engagement metrics.",
        benefit: "Make data-driven product decisions with confidence",
        icon: BarChart3,
    },
];
</script>

<template>
    <section id="features" class="container mx-auto py-24 px-6 max-w-6xl">
        <div class="text-center mb-16 px-4">
            <h2 class="text-3xl md:text-5xl font-lora font-bold text-base-content mb-4">
                Features That Drive Real Results
            </h2>
            <p class="text-xl font-lato text-base-content/70 max-w-3xl mx-auto">
                Designed for teams who want to build better
                products faster.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(feature, index) in features" :key="index"
                class="card group bg-white border border-base-200 rounded-xl shadow shadow-base-200">
                <div class="card-body">
                    <div class="flex items-start justify-between">
                        <div class="bg-primary/10 rounded-xl p-3">
                            <component :is="feature.icon" class="w-6 h-6 text-primary" />
                        </div>
                    </div>

                    <h3 class="card-title text-2xl font-extrabold mb-2 font-lora">{{ feature.title }}</h3>
                    <p class="text-secondary text-sm mb-3 font-lato">{{ feature.description }}</p>
                    <p class="text-xs text-accent font-medium font-lato">
                        → {{ feature.benefit }}
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-16 text-center">
            <!-- <p class="text-base-content/60 mb-6">
                Still have questions about our features?
            </p> -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://tally.so/r/3lZypW" target="_blank" class="btn btn-primary font-lato font-bold">
                    Join Waitlist
                </a>
                <!-- <a href="/demo" class="btn btn-outline btn-primary">
                    Book a Demo
                </a> -->
            </div>
        </div>
    </section>
</template>
