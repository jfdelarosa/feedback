<script setup lang="ts">
import { Plug, MessageSquare, Vote } from 'lucide-vue-next';
</script>

<template>
    <section id="hero" class="container mx-auto pt-12 pb-32">
        <div class="flex flex-col items-center text-center space-y-10">
            <div class="space-y-8 max-w-3xl">
                <h1 class="text-4xl font-lora md:text-[5.2rem] font-extrabold text-secondary leading-22">
                    Get user feedback <span class="text-neutral">that actually matters</span>
                </h1>
                <p class="text-xl font-lato text-secondary/80 max-w-xl mx-auto leading-10">
                    Capture insights where your users already are, right inside your app. No extra accounts. No
                    friction.
                </p>
            </div>

            <div class="flex flex-col justify-center sm:flex-row gap-4 w-full">
                <button class="btn btn-neutral btn-lg flex items-center gap-2">
                    <Plug class="w-5 h-5" /> Get early access
                </button>
                <a href="#how-it-works" class="btn btn-outline btn-lg flex items-center gap-2">
                    <MessageSquare class="w-5 h-5" /> See how it works
                </a>
            </div>

            <div class="flex items-center gap-1 text-sm text-secondary/60">
                <Vote class="w-4 h-4" /> <span>
                    Join our closed beta
                </span>
            </div>
        </div>
    </section>
</template>