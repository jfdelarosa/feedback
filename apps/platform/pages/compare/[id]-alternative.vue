<script setup lang="ts">
import { Check, X } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import { useCompetitorData } from '../../composables/useCompetitorData'

const route = useRoute()
const { getCompetitor } = useCompetitorData()

// Extract ID from the route parameter by removing '-alternative' suffix
const competitorId = String(route.params.id).replace('-alternative', '')
const competitor = getCompetitor(competitorId)
const { plans } = usePricing()

// Set SEO metadata if competitor is found
if (competitor) {
    useHead({
        title: competitor.seoTitle,
        meta: [
            { name: 'description', content: competitor.seoDescription },
            { name: 'keywords', content: competitor.seoKeywords.join(', ') }
        ]
    })
}
</script>


<template>
    <div v-if="competitor" class="bg-base-100 min-h-screen">
        <!-- Hero section -->
        <div class="relative overflow-hidden">
            <div class="container mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 max-w-7xl">
                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-1/2">
                        <div class="items-center gap-2 px-4 py-2 bg-base-300 rounded-full w-fit mb-6 hidden md:flex">
                            <span class="text-sm font-medium text-primary">
                                PulseKit is an alternative to {{ competitor.name }}
                            </span>
                        </div>
                        <h1
                            class="text-4xl font-lora font-extrabold tracking-tight text-base-content md:text-5xl leading-tight">
                            {{ competitor.name }} <span class="text-primary">Alternative</span>
                        </h1>
                        <p class="mt-6 text-xl font-lato text-base-content/70 leading-relaxed">
                            {{ competitor.longDescription }}
                        </p>
                        <div class="mt-10 flex flex-col sm:flex-row gap-4">
                            <a href="https://tally.so/r/3lZypW" target="_blank"
                                class="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-all font-lato font-bold">
                                Join the waitlist
                            </a>
                            <a href="#comparison" class="btn btn-outline btn-primary btn-lg font-lato">
                                See
                                comparison
                            </a>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <img src="/screenshot.png" alt="PulseKit vs Canny" class="w-full h-full object-contain" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Key differences -->
        <div class="bg-base-100 py-20 sm:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-lora font-bold tracking-tight text-base-content sm:text-4xl mb-4">
                        Why choose <span class="text-primary">PulseKit</span> over <span class="text-primary">{{
                            competitor.name }}</span>?
                    </h2>
                    <p class="mx-auto mt-3 max-w-2xl text-xl font-lato text-base-content/70 leading-relaxed">
                        PulseKit offers a more seamless experience for both your users and development team
                    </p>
                </div>

                <div class="mt-16">
                    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div v-for="(difference, idx) in competitor.keyDifferences" :key="idx" class="pt-6">
                            <div class="card bg-base-200 shadow-md hover:shadow-xl transition-all h-full">
                                <div class="card-body flex items-start gap-4">
                                    <span class="rounded-xl bg-primary/10 p-3">
                                        <Check class="size-6 text-primary" aria-hidden="true" />
                                    </span>
                                    <h3
                                        class="card-title text-xl font-lora font-medium tracking-tight text-base-content">
                                        {{ difference }}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Feature comparison -->
        <div id="comparison" class="bg-base-200 py-20 sm:py-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-lora font-bold tracking-tight text-base-content sm:text-4xl mb-4">
                        Feature Comparison
                    </h2>
                    <p class="mx-auto mt-3 max-w-2xl text-xl font-lato text-base-content/70 leading-relaxed">
                        See how PulseKit compares to {{ competitor.name }} across key features
                    </p>
                </div>

                <div class="mt-16 overflow-hidden">
                    <div class="relative">
                        <div class="mx-auto max-w-3xl">
                            <div class="overflow-x-auto">
                                <table class="table w-full bg-white">
                                    <thead>
                                        <tr>
                                            <th class="text-left font-lora text-base-content bg-base-300">
                                                Feature
                                            </th>
                                            <th class="text-center font-lora text-base-content bg-base-300">
                                                PulseKit
                                            </th>
                                            <th class="text-center font-lora text-base-content bg-base-300">
                                                {{ competitor.name }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="feature in competitor.features" :key="feature.name">
                                            <td>
                                                <div class="font-lora font-medium text-base-content">{{ feature.name }}
                                                </div>
                                                <div class="font-lato text-base-content/70 text-sm mt-1">{{
                                                    feature.description }}</div>
                                            </td>
                                            <td class="text-center">
                                                <Check v-if="feature.pulseKitHas"
                                                    class="mx-auto h-6 w-6 text-success" />
                                                <X v-else class="mx-auto h-6 w-6 text-base-content/30" />
                                            </td>
                                            <td class="text-center">
                                                <Check v-if="feature.competitorHas"
                                                    class="mx-auto h-6 w-6 text-success" />
                                                <X v-else class="mx-auto h-6 w-6 text-base-content/30" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pricing comparison -->
        <div class="mx-auto max-w-7xl px-4 container sm:px-6 lg:px-8 py-20">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-lora font-bold tracking-tight text-base-content sm:text-4xl mb-4">
                    Pricing Comparison
                </h2>
                <p class="mx-auto mt-3 max-w-2xl text-xl font-lato text-base-content/70 leading-relaxed">
                    Get more value for your investment with PulseKit
                </p>
            </div>

            <div class="px-8 space-y-4 max-w-3xl mx-auto">
                <p class="text-base leading-7 text-base-content/90 font-lato text-lg"
                    v-for="paragraph in competitor.pricingComparison.pricingParagraphs" :key="paragraph">
                    {{ paragraph }}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div v-for="plan in plans" :key="plan.name" class="text-center bg-base-200 rounded-xl p-4">
                        <div class="text-base font-lora font-semibold leading-8 tracking-tight text-base-content">
                            {{ plan.name }}
                        </div>
                        <div class="text-xl font-lato font-semibold leading-8 tracking-tight text-neutral">
                            {{ plan.formatedPrice }}
                        </div>
                    </div>
                </div>

                <div class="mt-8 flex justify-center">
                    <a href="/pricing" class="btn btn-primary">Learn more about pricing</a>
                </div>
            </div>
        </div>

        <!-- CTA section -->
        <div class="bg-primary">
            <div class="mx-auto max-w-4xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div class="text-center">
                    <h2 class="text-3xl font-lora font-bold tracking-tight text-primary-content sm:text-4xl mb-4">
                        <span class="block">Ready to switch from {{ competitor.name }}?</span>
                    </h2>
                    <p class="mt-4 text-lg font-lato leading-7 text-primary-content/70 max-w-2xl mx-auto">
                        Free migration assistance for all Growth and Scale plans
                    </p>
                    <div class="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://tally.so/r/3lZypW" target="_blank"
                            class="btn btn-lg bg-base-100 text-primary hover:bg-base-200 shadow-lg hover:shadow-xl transition-all font-lato font-bold">
                            Join the waitlist
                        </a>
                        <!-- <a href="#"
                            class="btn btn-lg btn-outline border-primary-content text-primary-content hover:bg-primary-focus font-lato">
                            Schedule a demo
                        </a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="py-24 text-center min-h-screen flex items-center justify-center flex-col">
        <p class="text-2xl font-lora text-base-content mb-4">Competitor not found</p>
        <NuxtLink to="/compare" class="btn btn-primary font-lato">
            Return to comparison page
        </NuxtLink>
    </div>
</template>
