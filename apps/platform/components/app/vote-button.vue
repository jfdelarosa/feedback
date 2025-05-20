<script setup lang="ts">
import { ChevronUp } from 'lucide-vue-next'

const emit = defineEmits<{
    (e: 'click'): void
}>()
</script>

<template>
    <button class="btn btn-ghost btn-sm flex flex-col gap-0 btn-square h-auto btn-lg" @click="emit('click')">
        <ChevronUp class="size-6" />
        <slot />
    </button>
</template>