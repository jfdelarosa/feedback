<script setup lang="ts">
definePageMeta({
    layout: 'dashboard'
})

const { formatDate } = useFormatters()

const route = useRoute()
const feedbackId = route.params.id as string

const newStatus = ref(null)

const { data: feedback, pending: feedbackPending, error } = await useLazyAsyncData(
    `feedback-${feedbackId}`,
    async () => {
        const req = await fetch(`/api/feedback/${feedbackId}`)

        return req.json()
    }
)

const statuses = ref([{
    label: 'New',
    value: 'new'
}, {
    label: 'In Progress',
    value: 'in-progress'
}, {
    label: 'Completed',
    value: 'completed'
}, {
    label: 'Declined',
    value: 'declined'
}])
</script>

<template>
    <div class="grid grid-cols-6 gap-4 items-start">
        <div class="col-span-6 flex items-center justify-between">
            <AppTitle>Feedback Details</AppTitle>
            <NuxtLink to="/app/feedback" class="btn btn-ghost">Back to List</NuxtLink>
        </div>

        <div v-if="feedbackPending" class="col-span-6">
            Loading...
        </div>

        <div v-else-if="error" class="col-span-6">
            <div class="alert alert-error">
                Failed to load feedback. Please try again.
            </div>
        </div>

        <template v-else-if="feedback">
            <div class="card shadow shadow-base-200 bg-white col-span-4">
                <div class="card-body">
                    <div class="text-xs text-base-content/60">
                        <p>Submitted {{ formatDate(feedback.createdAt) }}</p>
                    </div>

                    <div class="flex items-start justify-between relative">
                        <h2 class="card-title text-xl">{{ feedback.title }}</h2>


                        <div class="flex items-center gap-2 absolute top-0 right-0">
                            <div class="flex flex-col items-center">
                                <AppVoteButton>
                                    {{ feedback.votes || 0 }}
                                </AppVoteButton>
                            </div>
                        </div>
                    </div>

                    <div class>
                        <p>{{ feedback.content }}</p>
                    </div>


                </div>
            </div>

            <div class="card shadow shadow-base-200 bg-white col-span-2">
                <div class="card-body space-y-2">

                    <h3 class="font-semibold">
                        Submitted by
                    </h3>

                    <NuxtLink :href="`/app/users/${feedback.userId}`"
                        class="btn btn-sm btn-ghost h-auto justify-start w-full px-1 py-2">
                        <div class="avatar">
                            <div class="w-6 rounded-full">
                                <img :src="feedback.user.avatar" />
                            </div>
                        </div>

                        <div class="text-left">
                            <p class="text-xs font-semibold">{{ feedback.user.name }}</p>
                            <p class="text-xs text-base-content/60">{{ feedback.user.email }}</p>
                        </div>
                    </NuxtLink>

                    <h3 class="font-semibold">Actions</h3>

                    <div class="space-y-2">
                        <select class="select select-bordered w-full" v-model="newStatus">
                            <option disabled selected :value="null">Update Status</option>
                            <option v-for="status in statuses" :key="status.value" :value="status.value"
                                :selected="feedback.status === status.value">
                                {{ status.label }}
                            </option>
                        </select>

                        <template v-if="newStatus !== null && feedback.status !== newStatus">
                            <textarea class="textarea textarea-bordered w-full"
                                placeholder="Add a comment (optional)"></textarea>
                            <button class="btn btn-primary w-full flex items-center gap-2">
                                Save
                            </button>
                        </template>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
