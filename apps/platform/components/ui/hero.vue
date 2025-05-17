<script setup lang="ts">
import { Plug, MessageSquare, Vote } from 'lucide-vue-next';
</script>

<template>
    <div class="container mx-auto py-20">
        <div class="flex flex-col items-center text-center space-y-10">
            <div class="space-y-8 max-w-3xl">
                <h1 class="text-4xl font-lora md:text-7xl font-extrabold text-secondary">
                    Collect user feedback <span class="text-neutral">without
                        the friction</span>
                </h1>
                <p class="text-xl font-lato text-secondary/80 max-w-2xl mx-auto">
                    Embed feedback collection directly in your app. No separate logins. No context switching. Just
                    valuable insights from your actual users.
                </p>
            </div>

            <div class="flex flex-col justify-center sm:flex-row gap-4 w-full">
                <button class="btn btn-neutral btn-lg">
                    Join the waitlist
                </button>
                <button class="btn btn-outline btn-lg">
                    How it works
                </button>
            </div>

        </div>
    </div>
</template>