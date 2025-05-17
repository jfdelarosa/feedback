<script setup lang="ts">
import { SignUp } from '@clerk/vue'

definePageMeta({
    layout: 'full'
})
</script>

<template>
    <SignUp :with-sign-in="true" sign-in-url="/sign-in" />
</template>