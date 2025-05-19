<script setup lang="ts">
import { SignIn } from '@clerk/vue'

definePageMeta({
    layout: 'full'
})
</script>

<template>
    <SignIn :with-sign-up="true" sign-up-url="/sign-up" fallback-redirect-url="/app" />
</template>