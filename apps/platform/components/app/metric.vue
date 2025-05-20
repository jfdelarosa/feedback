<script setup lang="ts">
defineProps<{
    title: string
    loading: boolean
    data: any
}>()
</script>
<template>
    <div class="card shadow shadow-base-200 bg-white col-span-3">
        <div class="card-body p-0">
            <h2 class="card-title pt-4 px-4 text-secondary">{{ title }}</h2>

            <div class="px-4 pb-4" v-if="loading">
                <slot name="loading" />
            </div>
            <div v-else>
                <slot :data="data" />
            </div>
        </div>
    </div>
</template>