<script setup lang="ts">
import { ChevronLeftIcon } from 'lucide-vue-next';

definePageMeta({
    layout: 'dashboard'
})

const { formatDate } = useFormatters()

const route = useRoute();
const userId = route.params.id;
const userData = ref(null);

// Fetch user data including feedback, comments, and liked feedback
const { data, pending: userPending, error } = await useLazyAsyncData(
    `user-${userId}`,
    async () => {
        const req = await fetch(`/api/users/${userId}`);
        if (!req.ok) {
            throw new Error(`Failed to load user data: ${req.statusText}`);
        }
        return req.json();
    }
);

// Update userData when data is available
watchEffect(() => {
    if (data.value) {
        userData.value = data.value;
    }
});
</script>


<template>
    <div class="space-y-4">
        <div class="col-span-6 flex items-center justify-between">
            <AppTitle>User Profile</AppTitle>
            <NuxtLink to="/app/users" class="btn btn-ghost">
                <ChevronLeftIcon class="size-4" />
                Back to List
            </NuxtLink>
        </div>
        <div v-if="userPending" class="flex justify-center py-8">
            <div class="animate-pulse w-full max-w-3xl">
                <div class="h-24 bg-gray-200 rounded-lg mb-4"></div>
                <div class="h-96 bg-gray-200 rounded-lg"></div>
            </div>
        </div>

        <div v-else-if="error" class="bg-red-50 text-red-700 p-4 rounded-lg mb-4">
            <p>Error loading user profile: {{ error.message }}</p>
        </div>

        <div v-else>
            <!-- User Profile Header -->
            <div class="bg-white rounded-lg shadow p-6 mb-8">
                <div class="flex items-center gap-4">
                    <div v-if="userData?.user?.avatar" class="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                        <img :src="userData.user.avatar" alt="User avatar" class="w-full h-full object-cover" />
                    </div>
                    <div v-else class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                        <span class="text-blue-600 text-xl font-bold">{{ userData?.user?.name?.[0] ||
                            userData?.user?.email?.[0] || '?' }}</span>
                    </div>
                    <div>
                        <h1 class="font-bold">{{ userData?.user?.name || 'Anonymous User' }}</h1>
                        <p class="text-sm text-base-content/60">{{ userData?.user?.email || 'No email provided' }}</p>
                    </div>
                </div>
            </div>


            <div class="tabs tabs-box tabs-sm">
                <input type="radio" name="user" class="tab mb-1" aria-label="Feedback" checked />
                <div class="tab-content space-y-4">
                    <div v-if="!userData?.feedback?.length" class="p-8 text-center">
                        <p class="text-gray-500">This user hasn't submitted any feedback yet.</p>
                    </div>

                    <div v-for="item in userData?.feedback" :key="item.id"
                        class="bg-white shadow rounded-lg p-4 transition hover:shadow-md">
                        <div class="flex justify-between items-start">
                            <div>
                                <p class="text-xs text-base-content/60">{{ formatDate(item.createdAt) }}</p>
                                <NuxtLink :to="`/app/feedback/${item.id}`"
                                    class="text-primary hover:underline font-semibold">
                                    {{ item.title }}
                                </NuxtLink>
                            </div>
                            <div class="badge badge-sm">
                                {{ item.status }}
                            </div>
                        </div>
                        <p class="text-gray-700 text-sm line-clamp-3">{{ item.content }}</p>
                    </div>
                </div>


                <input type="radio" name="user" class="tab mb-1" aria-label="Comments" />
                <div class="tab-content space-y-4">
                    <div v-if="!userData?.comments?.length" class="p-8 text-center">
                        <p class="text-base-content/60">This user hasn't posted any comments yet.</p>
                    </div>

                    <div v-for="comment in userData?.comments" :key="comment.id" class="bg-white shadow rounded-lg p-4">
                        <p class="text-xs text-base-content/60">
                            Commented on
                            <NuxtLink :to="`/app/feedback/${comment.feedbackId}`" class="text-primary hover:underline">
                                feedback #{{ comment.feedbackId }}
                            </NuxtLink>
                            · {{ formatDate(comment.createdAt) }}
                        </p>
                        <p class="text-gray-700 text-sm line-clamp-3">{{ comment.content }}</p>
                    </div>
                </div>

                <input type="radio" name="user" class="tab mb-1" aria-label="Liked Feedback" />
                <div class="tab-content space-y-4">
                    <div v-if="!userData?.likedFeedback?.length" class="p-8 text-center">
                        <p class="text-base-content/60">This user hasn't liked any feedback yet.</p>
                    </div>

                    <div v-for="item in userData?.likedFeedback" :key="item.id"
                        class="bg-white shadow rounded-lg p-4 transition hover:shadow-md">
                        <div class="flex justify-between items-start">
                            <div>
                                <p class="text-xs text-base-content/60">{{ formatDate(item.createdAt) }}</p>
                                <NuxtLink :to="`/app/feedback/${item.id}`"
                                    class="text-primary hover:underline font-semibold">
                                    {{ item.title }}
                                </NuxtLink>
                            </div>
                            <div class="badge badge-sm">
                                {{ item.status }}
                            </div>
                        </div>
                        <p class="text-gray-700 text-sm line-clamp-3">{{ item.content }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
