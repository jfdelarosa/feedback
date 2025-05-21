<script setup lang="ts">
import { Code, MessageSquare, ChevronRight, MessageCircle } from 'lucide-vue-next';
import { vConfetti } from '@neoconfetti/vue';

definePageMeta({
    layout: 'default',
})
</script>

<template>
    <section class="container mx-auto px-4 pt-8 pb-16 flex flex-col items-center">

        <!-- Hero Section -->
        <div class="text-center mb-12">
            <div class="size-20 mx-auto mb-6 rounded-full bg-base-300 flex items-center justify-center">
                <span class="text-3xl">🎉</span>
                <div class="mt-30" v-confetti="{ particleCount: 100 }" />
            </div>
            <h1 class="text-3xl font-bold font-lora mb-4 text-primary">Welcome to PulseKit!</h1>
            <p class="text-xl max-w-2xl mx-auto text-base-content/80">
                Thank you for joining us. Your journey to better user feedback starts now.
            </p>
        </div>



        <!-- Features Cards - Horizontal Layout -->
        <div class="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mb-16">
            <!-- Embed Code Card -->
            <div class="card bg-white shadow shadow-base-200 flex-1">
                <div class="flex flex-col md:flex-row h-full">
                    <figure class="md:w-1/3 p-6">
                        <div class="w-full h-32 bg-base-200 rounded-xl flex items-center justify-center">
                            <Code class="size-16 text-accent" />
                        </div>
                    </figure>
                    <div class="card-body md:w-2/3">
                        <h2 class="card-title font-lora text-secondary">Get Your Embed Code</h2>
                        <p class="mb-4">Integrate PulseKit seamlessly into your application with just a few
                            lines of code.</p>
                        <div class="card-actions mt-auto">
                            <NuxtLink to="/app/embed-code" class="btn btn-accent">
                                Get Started
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Feedback Board Card -->
            <div class="card bg-white shadow shadow-base-200 flex-1">
                <div class="flex flex-col md:flex-row h-full">
                    <figure class="md:w-1/3 p-6">
                        <div class="w-full h-32 bg-base-200 rounded-xl flex items-center justify-center">
                            <MessageSquare class="size-16 text-accent" />
                        </div>
                    </figure>
                    <div class="card-body md:w-2/3">
                        <h2 class="card-title font-lora text-secondary">Our Feedback Board</h2>
                        <p class="mb-4">See how we use our own product! We've implemented PulseKit for our
                            feedback collection.</p>
                        <div class="card-actions mt-auto">
                            <NuxtLink to="/app/feedback" class="btn btn-accent">
                                Explore Board
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <NuxtLink to="/app" class="btn btn-primary mb-16">
            Go to your dashboard
            <ChevronRight class="size-5" />
        </NuxtLink>

        <!-- Help Section -->
        <div class="bg-base-200 rounded-box p-6 shadow shadow-base-300 max-w-2xl mx-auto text-center">
            <h3 class="font-lora text-lg mb-2 text-primary font-bold">Need help getting started?</h3>
            <p class="mb-4">We use our own feedback widget, let us know if you have any questions or suggestions!
            </p>
            <NuxtLink to="/app/feedback" class="btn btn-outline">
                <MessageCircle class="h-5 w-5 mr-2" />
                Send Feedback
            </NuxtLink>
        </div>
    </section>
</template>