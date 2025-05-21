<script setup lang="ts">
import { UserPlus, MessageSquare, Vote } from 'lucide-vue-next';
</script>

<template>
    <section id="hero" class="container mx-auto pt-12 pb-18 px-6">
        <div class="flex flex-col items-center text-center space-y-10">
            <div class="space-y-8 max-w-3xl">
                <h1
                    class="text-[3rem] font-lora md:text-[5.2rem] font-extrabold text-secondary leading-12 md:leading-22">
                    Get user feedback <span class="text-neutral">that actually matters</span>
                </h1>
                <p class="text-lg md:text-xl font-lato text-secondary/80 max-w-xl mx-auto leading-6 md:leading-10">
                    Capture insights where your users already are, right inside your app. No extra accounts. No
                    friction.
                </p>
            </div>

            <div class="flex flex-col justify-center sm:flex-row gap-4 w-full">
                <nuxt-link to="/sign-up" class="btn btn-neutral md:btn-lg flex items-center gap-2">
                    <UserPlus class="w-5 h-5" /> Start for free
                </nuxt-link>
                <a href="#how-it-works" class="btn btn-outline md:btn-lg flex items-center gap-2">
                    <MessageSquare class="w-5 h-5" /> See how it works
                </a>
            </div>

            <div class="flex items-center gap-1 text-sm text-secondary/60">
                <Vote class="w-4 h-4" /> <span>
                    No credit card required
                </span>
            </div>
        </div>
    </section>
</template>