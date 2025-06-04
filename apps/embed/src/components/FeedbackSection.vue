<script setup lang="ts" async>
import { vAutoAnimate } from '@formkit/auto-animate';
import { useFeedback } from '@/composables/useFeedback';
import { useState } from '@/composables/useState';
import { useFormatters } from '@/composables/useFormatters';

const props = defineProps<{
    isReadonly: boolean;
}>();

const { feedbackItems, loadFeedback } = useFeedback();
const { user } = useState();
const { formatDate } = useFormatters();

// Load feedback data
await loadFeedback();
</script>

<template>
    <div v-if="feedbackItems.length === 0" class="text-center py-8 @md:py-12 text-primary/50">
        <div class="text-sm @md:text-base">
            No feedback items yet.
            <span v-if="!isReadonly" class="block @md:inline">Be the first to share your thoughts!</span>
        </div>
    </div>

    <!-- Feedback items - responsive grid/column layout -->
    <div v-else class="space-y-3 @md:space-y-4" v-auto-animate>
        <div class="card bg-base-100 shadow-sm overflow-hidden">
            <div class="card-body p-0 overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="table table-zebra">
                        <!-- head -->
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Categories</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in feedbackItems" :key="item.id">
                                <td>
                                    <div class="flex gap-3 flex-col">
                                        <div class="font-bold">{{ item.title }}</div>
                                        <div class="text-sm opacity-50">
                                            {{ formatDate(item.createdAt) }}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span v-for="category in item.categories" :key="category.category.id"
                                        class="badge badge-outline mr-1">
                                        {{ category.category.name }}
                                    </span>
                                </td>
                                <td>
                                    <div class="flex items-center gap-3">
                                        <button class="btn btn-sm btn-accent" :class="{
                                            'btn-outline': !item.votes.find(v => v.userId === user?.id),
                                        }">
                                            👍 {{ item.votes.length || 0 }}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>