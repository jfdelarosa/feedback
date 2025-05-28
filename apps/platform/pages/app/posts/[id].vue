<script setup lang="ts">
import { ChevronLeftIcon } from 'lucide-vue-next';
import { toast } from 'vue-sonner';

definePageMeta({
    layout: 'dashboard'
})

const { formatDate } = useFormatters()
const apiClient = useApi()

const route = useRoute()
const feedbackId = route.params.id as string

const newStatus = ref(null)
const comment = ref('')
const updating = ref(false)
const updateError = ref<string | null>(null)
const newComment = ref('')
const postingComment = ref(false)

const { data: feedback, pending: feedbackPending, error } = await useLazyAsyncData(
    `feedback-${feedbackId}`,
    async () => {
        const req = await apiClient.api.feedback[":id"].$get({
            param: {
                id: feedbackId
            }
        })
        const data = await req.json()

        newStatus.value = data.status


        return data
    }
)

const { data: comments, refresh: refreshComments } = await useLazyAsyncData(
    `comments-${feedbackId}`,
    async () => {
        const req = await fetch(`/api/feedback/${feedbackId}/comments`)
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

async function updateStatus() {
    if (newStatus.value === null || newStatus.value === feedback.value.status) return

    updating.value = true
    updateError.value = null

    try {

        const req = await apiClient.api.feedback[":id"].status.$patch({
            param: {
                id: feedbackId
            },
            json: {
                status: newStatus.value,
                comment: comment.value.trim() ? comment.value : undefined
            }
        })

        await req.json()

        toast.success('Status updated successfully')

        // Refresh feedback data
        await refreshNuxtData(`feedback-${feedbackId}`)

        // Refresh comments
        await refreshComments()

        // Reset form
        comment.value = ''

    } catch (error) {
        const err = error as Error
        updateError.value = err.message || 'An error occurred while updating status'
    } finally {
        updating.value = false
    }
}

async function addComment() {
    if (!newComment.value.trim()) return

    postingComment.value = true

    try {
        const req = await apiClient.api.feedback[":id"].comments.$post({
            param: {
                id: feedbackId
            },
            json: {
                content: newComment.value
            }
        })

        await req.json()

        toast.success('Comment added successfully')

        // Refresh comments
        await refreshComments()

        // Reset form
        newComment.value = ''
    } catch (error) {
        const err = error as Error
        toast.error(err.message || 'Failed to add comment')
    } finally {
        postingComment.value = false
    }
}
</script>

<template>
    <div class="grid grid-cols-6 gap-4 items-start">
        <div class="col-span-6 flex items-center justify-between">
            <AppTitle>Feedback Details</AppTitle>
            <NuxtLink to="/app/posts" class="btn btn-ghost">
                <ChevronLeftIcon class="size-4" />
                Back to List
            </NuxtLink>
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

                    <!-- Comments Section -->
                    <div class="mt-6 border-t border-base-300 pt-4">
                        <h3 class="font-semibold mb-4">Comments and Updates</h3>

                        <div v-if="comments && comments.length > 0" class="space-y-4">
                            <div v-for="comment in comments" :key="comment.id"
                                class="pb-3 border-b border-base-200 last:border-0">
                                <!-- Status update display -->
                                <div v-if="comment.isStatusUpdate" class="flex items-center gap-2 py-2">
                                    <div class="flex items-center gap-2 text-xs">
                                        <div v-if="comment.authorPlatformUser" class="flex items-center gap-2">
                                            <img v-if="comment.authorPlatformUser.image"
                                                :src="comment.authorPlatformUser.image" alt="User avatar"
                                                class="w-6 h-6 rounded-full bg-base-300" />
                                            <span v-else class="w-6 h-6 rounded-full bg-base-300 inline-block"></span>
                                            <div class="text-sm space-x-1">
                                                <span class="text-base-content/70 font-semibold">
                                                    {{ comment.authorPlatformUser.name ||
                                                        comment.authorPlatformUser.email ||
                                                        'Anonymous' }}
                                                </span>
                                                <span class="text-base-content">
                                                    marked this as <span class="font-medium">{{ comment.statusTo
                                                    }}</span>
                                                </span>
                                                <span class="text-base-content/50 text-xs">
                                                    {{ formatDate(comment.createdAt) }}
                                                </span>
                                            </div>
                                        </div>
                                        <div v-else-if="comment.representingClientUser" class="flex items-center gap-2">
                                            <img v-if="comment.representingClientUser.avatar"
                                                :src="comment.representingClientUser.avatar" alt="User avatar"
                                                class="w-6 h-6 rounded-full bg-base-300" />
                                            <span v-else class="w-6 h-6 rounded-full bg-base-300 inline-block"></span>
                                            <div class="text-sm space-x-1">
                                                <span class="text-base-content/70 font-semibold">
                                                    {{ comment.representingClientUser.name ||
                                                        comment.representingClientUser.email ||
                                                        'Anonymous' }}
                                                </span>
                                                <span class="text-base-content">
                                                    marked this as <span class="font-medium">{{ comment.statusTo
                                                    }}</span>
                                                </span>
                                                <span class="text-base-content/50 text-xs">
                                                    {{ formatDate(comment.createdAt) }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Regular comment display -->
                                <div v-else>
                                    <div class="flex items-center gap-2 text-xs mb-1">
                                        <div v-if="comment.authorPlatformUser" class="flex items-center gap-2">
                                            <img v-if="comment.authorPlatformUser.image"
                                                :src="comment.authorPlatformUser.image" alt="User avatar"
                                                class="w-6 h-6 rounded-full bg-base-300" />
                                            <span v-else class="w-6 h-6 rounded-full bg-base-300 inline-block"></span>
                                            <div class="text-xs space-x-1">
                                                <span class="text-base-content/70 font-semibold">
                                                    {{ comment.authorPlatformUser.name ||
                                                        comment.authorPlatformUser.email ||
                                                        'Anonymous' }}
                                                </span>
                                                <span class="text-base-content/50">
                                                    {{ formatDate(comment.createdAt) }}
                                                </span>
                                            </div>
                                        </div>

                                        <div v-else-if="comment.representingClientUser" class="flex items-center gap-2">
                                            <img v-if="comment.representingClientUser.avatar"
                                                :src="comment.representingClientUser.avatar" alt="User avatar"
                                                class="w-6 h-6 rounded-full bg-base-300" />
                                            <span v-else class="w-6 h-6 rounded-full bg-base-300 inline-block"></span>
                                            <div class="text-xs space-x-1">
                                                <span class="text-base-content/70 font-semibold">
                                                    {{ comment.representingClientUser.name ||
                                                        comment.representingClientUser.email ||
                                                        'Anonymous' }}
                                                </span>
                                                <span class="text-base-content/50">
                                                    {{ formatDate(comment.createdAt) }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="pl-8 text-sm text-base-content">{{ comment.content }}</div>
                                </div>
                            </div>
                        </div>

                        <div v-else class="text-sm text-base-content/60 py-3">No comments yet.</div>

                        <!-- Add Comment Form -->
                        <div class="mt-4 pt-4 border-t border-base-200">
                            <h4 class="text-sm font-medium mb-2">Add a Comment</h4>
                            <div class="flex flex-col gap-2">
                                <textarea class="textarea textarea-bordered text-sm w-full" v-model="newComment"
                                    placeholder="Add a comment..."></textarea>
                                <button class="btn btn-sm btn-primary self-end"
                                    :disabled="!newComment.trim() || postingComment" @click="addComment">
                                    <span v-if="postingComment">Posting...</span>
                                    <span v-else>Post Comment</span>
                                </button>
                            </div>
                        </div>
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

                    <h3 class="font-semibold">Status</h3>
                    <div class="badge" :class="{
                        'badge-primary': feedback.status === 'new',
                        'badge-warning': feedback.status === 'in-progress',
                        'badge-success': feedback.status === 'completed',
                        'badge-error': feedback.status === 'declined'
                    }">
                        {{statuses.find(s => s.value === feedback.status)?.label || 'Unknown'}}
                    </div>

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
                            <textarea class="textarea textarea-bordered w-full" placeholder="Add a comment (optional)"
                                v-model="comment"></textarea>
                            <button class="btn btn-primary w-full flex items-center gap-2" @click="updateStatus"
                                :disabled="updating">
                                <span v-if="updating">Saving...</span>
                                <span v-else>Save</span>
                            </button>
                            <div v-if="updateError" class="text-error text-xs mt-2">
                                {{ updateError }}
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
