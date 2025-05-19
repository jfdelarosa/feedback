<script setup lang="ts">
import { ChevronUp } from 'lucide-vue-next';

definePageMeta({
    layout: 'dashboard'
})

const apiClient = useApi()

const { data: recentPosts } = await useAsyncData('recentFeedback', async () => {
    const req = await apiClient.api.dashboard['recent-feedback'].$get()
    return req.json()
})

const { data: mostPopularPosts } = await useAsyncData('topVotedFeedback', async () => {
    const req = await apiClient.api.dashboard['top-voted-feedback'].$get()
    return req.json()
})
</script>

<template>

    <div class="grid grid-cols-6 gap-4">
        <div class="col-span-6">
            <AppTitle>Dashboard</AppTitle>
        </div>
        <div class="card shadow shadow-base-200 bg-white col-span-3">
            <div class="card-body p-0">
                <h2 class="card-title pt-4 px-4 text-secondary">New Posts</h2>

                <ul class="list" v-if="recentPosts.length > 0">
                    <li class="list-row items-center" v-for="post in recentPosts" :key="post.id">
                        <div class="list-col-grow">
                            <a href="#" class="hover:underline">{{ post.title }}</a>
                        </div>
                        <div>
                            <button class="btn btn-ghost btn-sm flex flex-col gap-0 btn-square btn-lg">
                                <ChevronUp class="size-6" />
                                {{ post.votes }}
                            </button>
                        </div>
                    </li>
                </ul>

                <div class="list-col-grow px-4 pb-4" v-else>
                    <p class="text-sm text-base-content/60">No posts found</p>
                </div>
            </div>
        </div>

        <div class="card shadow shadow-base-200 bg-white col-span-3">
            <div class="card-body p-0">
                <h2 class="card-title pt-4 px-4 text-secondary">Most Popular Posts</h2>

                <ul class="list" v-if="mostPopularPosts.length > 0">
                    <li class="list-row items-center" v-for="post in mostPopularPosts" :key="post.id">
                        <div class="list-col-grow">
                            <a href="#" class="hover:underline">{{ post.title }}</a>
                        </div>
                        <div>
                            <button class="btn btn-ghost btn-sm flex flex-col gap-0 btn-square btn-lg">
                                <ChevronUp class="size-6" />
                                {{ post.votes }}
                            </button>
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