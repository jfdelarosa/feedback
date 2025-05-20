<script setup lang="ts">
import { ChevronUp } from 'lucide-vue-next';

definePageMeta({
    layout: 'dashboard'
})

const apiClient = useApi()

const { data: recentPosts, pending: recentPostsPending } = await useLazyAsyncData('recentFeedback', async () => {
    const req = await apiClient.api.dashboard['recent-feedback'].$get()
    return req.json()
})

const { data: mostPopularPosts, pending: mostPopularPostsPending } = await useLazyAsyncData('topVotedFeedback', async () => {
    const req = await apiClient.api.dashboard['top-voted-feedback'].$get()
    return req.json()
})
</script>

<template>

    <div class="grid grid-cols-6 gap-4">
        <div class="col-span-6">
            <AppTitle>Dashboard</AppTitle>
        </div>

        <div class="col-span-3">
            <AppMetric title="New Posts" :loading="recentPostsPending" :data="recentPosts">
                <template #loading>
                    Loading...
                </template>
                <template #default="{ data }">
                    <ul class="list" v-if="data.length > 0">
                        <li class="list-row items-center" v-for="post in data" :key="post.id">
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
                </template>
            </AppMetric>
        </div>

        <div class="col-span-3">
            <AppMetric title="Most Popular Posts" :loading="mostPopularPostsPending" :data="mostPopularPosts">
                <template #loading>
                    Loading...
                </template>
                <template #default="{ data }">
                    <ul class="list" v-if="data.length > 0">
                        <li class="list-row items-center" v-for="post in data" :key="post.id">
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
                </template>
            </AppMetric>
        </div>
    </div>
</template>

<style scoped>
.list-row:after {
    left: 0;
    right: 0;
}
</style>