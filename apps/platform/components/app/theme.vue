<script setup lang="ts">
const { theme, name } = defineProps<{
    theme: string
    name: string
}>()

const emit = defineEmits<{
    (e: 'click', theme: string): void
}>()

function updateTheme(theme: string) {
    emit('click', theme)
}
</script>

<template>
    <div class="border-base-content/20 overflow-hidden rounded-box border" :data-theme="theme.toLowerCase()"
        @click="updateTheme(theme)">
        <div class="bg-base-100 text-base-content w-full font-sans">
            <div class="grid grid-cols-5 grid-rows-3">
                <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                <div class="bg-base-300 col-start-1 row-start-3"></div>
                <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                    <div class="font-bold">{{ name }}</div>
                    <div class="flex flex-wrap gap-1">
                        <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded-btn lg:w-6">
                            <div class="text-primary-content text-sm font-bold">A</div>
                        </div>
                        <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded-btn lg:w-6">
                            <div class="text-secondary-content text-sm font-bold">A</div>
                        </div>
                        <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded-btn lg:w-6">
                            <div class="text-accent-content text-sm font-bold">A</div>
                        </div>
                        <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded-btn lg:w-6">
                            <div class="text-neutral-content text-sm font-bold">A</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>