<script setup lang="ts">
import { HelpCircle } from 'lucide-vue-next';

const faqs = [
    {
        question: "How does PulseKit integrate with my product?",
        answer: "PulseKit embeds directly into your app with a simple SDK or Web Component. Just copy your unique code snippet from the dashboard and add it to your application. No iframes or redirects - your users stay in your UI."
    },
    {
        question: "Will my users need to create separate accounts?",
        answer: "No! That's what makes PulseKit different. Your users submit feedback using their existing identity in your app - no new accounts, no friction, no context switching. This is why we see 85% higher engagement rates."
    },
    {
        question: "Can I customize how the feedback widget looks?",
        answer: "Absolutely. PulseKit is fully customizable to match your brand colors, fonts, and UI patterns. Your users will never know they're using a third-party tool."
    },
    {
        question: "How do I manage and respond to feedback?",
        answer: "All feedback flows into your PulseKit dashboard where you can categorize, prioritize, and respond directly to users."
    },
    {
        question: "Is it difficult to implement for developers?",
        answer: "Not at all. Most teams get PulseKit up and running in under 30 minutes. We provide clear documentation, SDKs for all major frameworks, and dedicated support to make integration seamless for developers of any skill level."
    },
    {
        question: "What if I need to migrate existing feedback data?",
        answer: "We offer free data migration assistance for all Growth and Scale plans. Our team will help you import your existing feedback data so you don't lose any valuable insights from your users."
    },
    {
        question: "How does the voting system work?",
        answer: "Users can upvote feedback and feature requests directly within your app. This helps you understand which features are most requested and validate your product roadmap with real user data. You'll see vote counts and trends in your dashboard."
    }
];
</script>

<template>
    <section id="faqs" class="bg-base-200 py-24 px-6">
        <div class="container max-w-4xl mx-auto">
            <div class="text-center mb-16 px-4">
                <h2 class="text-3xl md:text-5xl font-lora font-bold text-base-content mb-4">
                    Everything You Need to Know
                </h2>
                <p class="text-xl font-lato text-base-content/70 max-w-2xl mx-auto">
                    Got questions? We've got answers. If you can't find what you're looking for, our support team is
                    always happy to help.
                </p>
            </div>

            <div class="space-y-4">
                <div v-for="(faq, index) in faqs" :key="index"
                    class="collapse collapse-arrow bg-base-100 shadow-sm hover:shadow-md transition-shadow">
                    <input type="radio" name="faq-accordion" :checked="index === 0" />
                    <div class="collapse-title text-lg font-semibold pr-12">
                        {{ faq.question }}
                    </div>
                    <div class="collapse-content">
                        <p class="text-base-content/80 leading-relaxed pt-2">
                            {{ faq.answer }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="mt-16 card bg-base-300 text-primary-content">
                <div class="card-body items-center text-center">
                    <h3 class="card-title text-2xl mb-2 text-base-content">Still have questions?</h3>
                    <p class="mb-6 text-base-content/80">Our team is here to help you get the most out of PulseKit</p>
                    <div class="flex gap-4">
                        <a href="/contact" class="btn btn-accent">
                            Contact Support
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>