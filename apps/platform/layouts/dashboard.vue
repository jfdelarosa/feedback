<script setup>
// Import Lucide icons
import { MessageSquare, BarChart2, Settings } from 'lucide-vue-next';
const { user } = useUser()

const items = [
    {
        name: 'Dashboard',
        icon: BarChart2,
        href: '/app'
    },
    {
        name: 'Feedback',
        icon: MessageSquare,
        href: '/app/feedback'
    },
    {
        name: 'Settings',
        icon: Settings,
        href: '/app/settings'
    }
]
</script>


<template>

    <div class="min-h-screen bg-base-100 flex container max-w-5xl mx-auto">
        <!-- Sidebar - desktop -->
        <aside class="hidden lg:flex flex-col w-50">
            <!-- Logo -->
            <div class="px-4 py-5">
                <div class="flex items-center gap-2">
                    <img src="/logo.svg" class="h-8 w-auto" />
                    <span class="text-xl font-bold">PulseKit</span>
                </div>
            </div>

            <div class="p-2 space-y-4">
                <div class="flex items-center gap-2">
                    <img :src="user?.imageUrl" class="size-6 rounded-full" />
                    <div class="flex flex-col">
                        <span class="text-sm font-medium">{{ user?.fullName }}</span>
                        <span class="text-xs text-base-content/60">{{ user?.emailAddresses[0]?.emailAddress }}</span>
                    </div>
                </div>
            </div>

            <!-- Nav -->
            <nav class="flex-1 py-4 px-2 space-y-4">
                <ul class="space-y-1">
                    <li v-for="item in items" :key="item.name">
                        <NuxtLink :to="item.href"
                            class="flex items-center gap-3 text-sm px-3 py-2 rounded-md text-base-content/70 hover:bg-base-200"
                            active-class="bg-base-300 text-primary font-medium ">
                            <component :is="item.icon" class="size-4 opacity-70" stroke-width="2.5" />
                            {{ item.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </aside>

        <div class="flex-1 p-6 overflow-y-auto">
            <slot />
        </div>
    </div>
</template>

<style scoped>
/* Smooth transitions for better UX */
.drawer-side,
.drawer-content {
    transition: transform 0.3s ease-in-out;
}
</style>
