<template>
    <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Compare PulseKit to Alternatives
            </h1>
            <p class="mt-4 text-xl text-gray-500">
                See how PulseKit's embedded feedback system stacks up against other feedback platforms
            </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <NuxtLink v-for="competitor in competitors" :key="competitor.id"
                :to="`/compare/${competitor.id}-alternative`"
                class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
                <div class="p-6">
                    <div class="flex items-center space-x-3 mb-4">
                        <img :src="competitor.logo" alt="" class="h-10 w-10" />
                        <h2 class="text-xl font-semibold text-gray-900">{{ competitor.name }}</h2>
                    </div>
                    <p class="text-gray-600">{{ competitor.shortDescription }}</p>

                    <div class="mt-6 flex-grow">
                        <div class="flex items-center mb-2">
                            <CheckCircle class="h-5 w-5 text-green-500 mr-2" />
                            <span>{{ competitor.topBenefit }}</span>
                        </div>
                    </div>

                    <div class="mt-4 flex justify-between items-center">
                        <span class="text-sm text-gray-500">See detailed comparison</span>
                        <span
                            class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            vs PulseKit
                        </span>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CheckCircle } from 'lucide-vue-next'
import { useCompetitorData } from '../../composables/useCompetitorData'

const { getAllCompetitors } = useCompetitorData()
const competitors = getAllCompetitors()

useHead({
    title: 'Compare PulseKit to Alternative Feedback Tools',
    meta: [
        { name: 'description', content: 'See how PulseKit compares to other user feedback platforms and tools. Get embedded feedback directly in your product without the friction.' }
    ]
})
</script>
