<script setup lang="ts">
import { Play, Sparkles } from 'lucide-vue-next';
</script>

<template>
    <section id="hero" class="container mx-auto p-6">
        <div class="flex flex-col items-center text-center space-y-10">
            <!-- Badge -->
            <div class="md:inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full hidden">
                <Sparkles class="w-4 h-4 text-primary" />
                <span class="text-sm font-medium text-primary">Embed feedback collection in 5 minutes</span>
            </div>

            <div class="space-y-8 max-w-4xl">
                <h1 class="text-[3rem] font-lora md:text-[5.2rem] font-extrabold text-neutral leading-12 md:leading-22">
                    Turn User Feedback Into <span class="text-primary">Product Success</span>
                </h1>
                <div>

                    <p
                        class="text-lg md:text-xl font-lato text-base-content/70 max-w-2xl mx-auto leading-7 md:leading-8">
                        PulseKit embeds a feedback board directly into your app, capturing valuable user insights
                        without the
                        friction of external tools.
                    </p>
                    <p
                        class="hidden md:flex text-lg md:text-xl font-lato text-base-content/70 max-w-2xl mx-auto leading-7 md:leading-8">
                        No new logins. No context switching.
                    </p>
                </div>
            </div>

            <div class="flex flex-col justify-center sm:flex-row gap-4 w-full">
                <a href="https://tally.so/r/3lZypW" target="_blank"
                    class="btn btn-primary btn-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                    Join Waitlist
                </a>
                <a href="#how-it-works" class="btn btn-outline btn-primary btn-lg flex items-center gap-2">
                    How It Works
                </a>
            </div>

            <div class="mt-8 w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl">
                <img src="/screenshot.png" alt="PulseKit Dashboard" class="w-full h-auto" />
            </div>
        </div>
    </section>
</template>