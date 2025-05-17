<script setup lang="ts">
import { Lightbulb, Gauge, PuzzleIcon, MessageCircle, UserCheck, BarChartHorizontal } from 'lucide-vue-next';

const { showWaitlistModal } = useWaitlist();

const features = [
    {
        title: "In-App Feedback",
        description: "Embed feedback collection directly inside your product interface",
        catchPhrase: "so users never have to leave your application",
        icon: MessageCircle,
        iconColor: "text-brand-blue"
    },
    {
        title: "Zero Friction",
        description: "Eliminate barriers with a feedback process that requires no new accounts",
        catchPhrase: "making it easy for users to share their thoughts",
        icon: Gauge,
        iconColor: "text-brand-purple"
    },
    {
        title: "Easy Integration",
        description: "Add our lightweight SDK to any web application with minimal code",
        catchPhrase: "supporting all major frontend frameworks",
        icon: PuzzleIcon,
        iconColor: "text-brand-pink"
    },
    {
        title: "Idea Voting",
        description: "Let users vote on feature requests and suggestions",
        catchPhrase: "helping you prioritize what to build next",
        icon: UserCheck,
        iconColor: "text-brand-blue"
    },
    {
        title: "Actionable Insights",
        description: "Organize feedback into structured data for your product team",
        catchPhrase: "turning user suggestions into product improvements",
        icon: Lightbulb,
        iconColor: "text-brand-purple"
    },
    {
        title: "Analytics Dashboard",
        description: "View feedback trends and patterns in a simple dashboard",
        catchPhrase: "giving your team clear insights about user needs",
        icon: BarChartHorizontal,
        iconColor: "text-brand-pink"
    }
];
</script>

<template>
    <section id="features" class="container mx-auto py-16">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-5xl font-lora font-bold text-secondary mb-4">Key Features</h2>
            <p class="text-xl font-lato text-accent/80 max-w-2xl mx-auto">
                Everything you need to collect, organize, and act on user feedback without the complexity.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(feature, index) in features" :key="index" class="card">
                <div class="card-body">
                    <div class="flex items-center mb-4">
                        <div class="bg-base-200 rounded-full size-12 flex items-center justify-center">
                            <component :is="feature.icon" class="size-6 text-neutral/50" :class="feature.iconColor" />
                        </div>
                        <h3 class="card-title ml-3 font-lora text-xl">{{ feature.title }}</h3>
                    </div>
                    <p class="font-lato text-secondary/80">{{ feature.description }} <span
                            class="italic font-lora text-neutral/90 font-medium text-lg">{{ feature.catchPhrase
                            }}</span>.
                    </p>
                </div>
            </div>
        </div>

        <div class="flex justify-center mt-12">
            <button class="btn btn-neutral" @click="showWaitlistModal">
                Start collecting feedback
            </button>
        </div>
    </section>
</template>
