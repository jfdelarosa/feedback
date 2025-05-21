<script setup lang="ts">
import { ChevronUp } from 'lucide-vue-next';

definePageMeta({
    layout: 'dashboard'
})



const { data: feedback, pending: feedbackPending } = await useLazyAsyncData('feedback', async () => {
    const req = await fetch('/api/feedback')

    return req.json()
})
</script>

<template>
    <div class="grid grid-cols-6 gap-4">
        <div class="col-span-6">
            <AppTitle>Feedback</AppTitle>
        </div>

        <div class="card shadow shadow-base-200 bg-white col-span-6">
            <div class="card-body p-0">
                <h2 class="card-title pt-4 px-4 text-secondary">New Posts</h2>

                <div class="px-4 pb-4" v-if="feedbackPending">
                    Loading...
                </div>

                <ul class="list" v-else-if="feedback.length > 0">
                    <li class="list-row items-center" v-for="post in feedback" :key="post.id">
                        <div class="list-col-grow">
                            <NuxtLink :to="`/app/posts/${post.id}`" class="hover:underline">{{ post.title }}
                            </NuxtLink>
                        </div>
                        <div>
                            <AppVoteButton>
                                {{ post.votes || 0 }}
                            </AppVoteButton>
                        </div>
                    </li>
                </ul>

                <div class="list-col-grow px-4 pb-4" v-else>
                    <p class="text-sm text-base-content/60">No posts found</p>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped>
.list-row:after {
    left: 0;
    right: 0;
}
</style>