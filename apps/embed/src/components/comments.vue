<script setup lang="ts">
import { ref } from 'vue';
import type { FeedbackComment } from '@/types';
import { useFormatters } from "@/composables/useFormatters"
import { vAutoAnimate } from '@formkit/auto-animate'

defineProps<{
    isReadonly: boolean;
    comments: FeedbackComment[];
}>();

const emit = defineEmits<{
    (e: 'addComment', comment: string): void;
}>();

const newComment = ref('');
const { formatDate } = useFormatters();


function addComment() {
    emit('addComment', newComment.value);
    newComment.value = '';
};
</script>

<template>
    <div class="p-4 border-t border-base-300 bg-base-200/80 space-y-4">
        <div class="space-y-4">
            <div v-for="comment in comments" :key="comment.id" v-auto-animate>
                <!-- Status update display -->
                <div v-if="comment.isStatusUpdate" class="flex items-center gap-2 py-2">
                    <div class="flex items-center gap-2 text-xs">
                        <template v-if="comment.authorPlatformUser">
                            <img v-if="comment.authorPlatformUser.avatar" :src="comment.authorPlatformUser.avatar"
                                alt="User avatar" class="w-6 h-6 rounded-full bg-base-300" />
                            <span v-else class="w-6 h-6 rounded-full bg-base-300 inline-block"></span>
                            <div class="text-sm space-x-1">
                                <span class="text-base-content/70 font-semibold">
                                    {{ comment.authorPlatformUser.name || comment.authorPlatformUser.email ||
                                        'Anonymous' }}
                                </span>
                                <span class="text-base-content">
                                    marked this as <span class="font-medium">{{ comment.statusTo }}</span>
                                </span>
                                <span class="text-base-content/50 text-xs">
                                    {{ formatDate(comment.createdAt) }}
                                </span>
                            </div>
                        </template>
                        <template v-else>
                            <img v-if="comment.representingClientUser.avatar"
                                :src="comment.representingClientUser.avatar" alt="User avatar"
                                class="w-6 h-6 rounded-full bg-base-300" />
                            <span v-else class="w-6 h-6 rounded-full bg-base-300 inline-block"></span>
                            <div class="text-sm space-x-1">
                                <span class="text-base-content/70 font-semibold">
                                    {{ comment.representingClientUser.name || comment.representingClientUser.email ||
                                        'Anonymous' }}
                                </span>
                                <span class="text-base-content">
                                    marked this as <span class="font-medium">{{ comment.statusTo }}</span>
                                </span>
                                <span class="text-base-content/50 text-xs">
                                    {{ formatDate(comment.createdAt) }}
                                </span>
                            </div>
                        </template>
                    </div>
                </div>

                <!-- Regular comment display -->
                <div v-else>
                    <div class="flex items-center gap-2 text-xs mb-1">
                        <template v-if="comment.authorPlatformUser">
                            <img v-if="comment.authorPlatformUser.avatar" :src="comment.authorPlatformUser.avatar"
                                alt="User avatar" class="w-6 h-6 rounded-full bg-base-300" />
                            <span v-else class="w-6 h-6 rounded-full bg-base-300 inline-block"></span>
                            <div class="text-xs space-x-1">
                                <span class="text-base-content/70 font-semibold">
                                    {{ comment.authorPlatformUser.name || comment.authorPlatformUser.email ||
                                        'Anonymous' }}
                                </span>
                                <span class="text-base-content/50">
                                    {{ formatDate(comment.createdAt) }}
                                </span>
                            </div>
                        </template>

                        <template v-else>
                            <img v-if="comment.representingClientUser.avatar"
                                :src="comment.representingClientUser.avatar" alt="User avatar"
                                class="w-6 h-6 rounded-full bg-base-300" />
                            <span v-else class="w-6 h-6 rounded-full bg-base-300 inline-block"></span>
                            <div class="text-xs space-x-1">
                                <span class="text-base-content/70 font-semibold">
                                    {{ comment.representingClientUser.name || comment.representingClientUser.email ||
                                        'Anonymous' }}
                                </span>
                                <span class="text-base-content/50">
                                    {{ formatDate(comment.createdAt) }}
                                </span>
                            </div>
                        </template>
                    </div>

                    <div class="pl-8 text-sm text-base-content">{{ comment.content }}</div>
                </div>
            </div>
        </div>


        <div class="flex flex-col gap-2" v-if="!isReadonly">
            <textarea class="textarea textarea-bordered text-sm w-full" v-model="newComment"
                placeholder="Add a comment..."></textarea>
            <button class="btn btn-sm btn-primary self-end" :disabled="!newComment.trim()" @click="addComment">
                Submit
            </button>
        </div>
    </div>
</template>