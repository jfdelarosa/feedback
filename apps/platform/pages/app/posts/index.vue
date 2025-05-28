<script setup lang="ts">
import { MessageSquare, ChevronUp } from 'lucide-vue-next';

definePageMeta({
    layout: 'dashboard'
})

type FeedbackStatus = 'new' | 'in-progress' | 'completed' | 'declined';

// Status badge classes mapping
const statusClasses: Record<FeedbackStatus, string> = {
    'new': 'bg-blue-100 text-blue-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    'completed': 'bg-green-100 text-green-800',
    'declined': 'bg-red-100 text-red-800'
}

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
                    <div class="animate-pulse flex space-x-4">
                        <div class="flex-1 space-y-4 py-1">
                            <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>

                <div class="overflow-x-auto" v-else-if="feedback.length > 0">
                    <table class="table table-zebra">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Status</th>
                                <th class="text-right">
                                    Comments / Votes
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="post in feedback" :key="post.id" @click="navigateTo(`/app/posts/${post.id}`)"
                                class="hover cursor-pointer">
                                <td class="font-medium">{{ post.title }}</td>
                                <td>
                                    <span class="text-xs px-2 py-0.5 rounded-full capitalize"
                                        :class="statusClasses[post.status as FeedbackStatus] || 'bg-gray-100 text-gray-800'">
                                        {{ post.status || 'new' }}
                                    </span>
                                </td>
                                <td class="text-right flex items-center justify-end gap-2">
                                    <div class="flex items-center justify-end gap-1 text-base-content/60">
                                        <MessageSquare class="size-4" />
                                        <span class="text-sm">{{ post.comments_count || 0 }}</span>
                                    </div>

                                    <div class="flex items-center justify-end gap-1 text-base-content/60">
                                        <ChevronUp class="size-4" />
                                        <span class="text-sm">{{ post.votes || 0 }}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="px-4 pb-4" v-else>
                    <p class="text-sm text-base-content/60">No posts found</p>
                </div>
            </div>
        </div>
    </div>
</template>
