<script setup lang="ts">
const { user, isLoaded } = useUser();


definePageMeta({
    layout: "dashboard"
})


const customUser = computed(() => {
    return JSON.stringify({
        externalId: user.value?.id,
        email: user.value?.emailAddresses[0].emailAddress,
        name: user.value?.firstName,
        avatar: user.value?.imageUrl
    })
})
</script>

<template>
    <div class="space-y-4">
        <div class="col-span-6 flex items-center justify-between">
            <AppTitle>Feedback</AppTitle>
        </div>

        <pulsekit-board v-if="isLoaded" project-id="019713b1-3e7f-7000-b38f-45484ce56503" :user="customUser" />
    </div>
</template>
