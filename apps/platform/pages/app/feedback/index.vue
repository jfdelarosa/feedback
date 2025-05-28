<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const { session, isInitialized } = useAuthStore();


definePageMeta({
    layout: "dashboard"
})


const customUser = computed(() => {
    return JSON.stringify({
        externalId: session?.user?.id,
        email: session?.user?.email,
        name: session?.user?.name,
        avatar: session?.user?.image
    })
})
</script>

<template>
    <div class="space-y-4">
        <div class="col-span-6 flex items-center justify-between">
            <AppTitle>Feedback</AppTitle>
        </div>

        <pulsekit-board v-if="isInitialized" project-id="019713b1-3e7f-7000-b38f-45484ce56503" :user="customUser" />
    </div>
</template>
