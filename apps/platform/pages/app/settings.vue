<script setup>
definePageMeta({
    layout: 'dashboard'
})
</script>

<template>
    <div class="space-y-4">
        <AppTitle>Settings</AppTitle>

        <div role="tablist" class="tabs tabs-box tabs-sm">
            <NuxtLink to="/app/settings" role="tab" class="tab" exact-active-class="tab-active">General
            </NuxtLink>
            <NuxtLink to="/app/settings/team" role="tab" class="tab" active-class="tab-active">Team</NuxtLink>
            <NuxtLink to="/app/settings/billing" role="tab" class="tab" active-class="tab-active">Billing</NuxtLink>
        </div>

        <NuxtPage />
    </div>
</template>