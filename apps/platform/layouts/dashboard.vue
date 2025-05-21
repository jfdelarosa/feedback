<script setup>
import { Toaster } from 'vue-sonner'

import { UserButton } from '@clerk/vue'
import { MessageSquare, BarChart2, Code, Users, Settings, MessageCircleHeart } from 'lucide-vue-next';

useSeoMeta({
    title: 'PulseKit',
    description: 'Get user feedback that actually matters',
})

const items = [
    {
        name: 'Dashboard',
        icon: BarChart2,
        href: '/app',
        to: "app"
    },
    {
        name: 'Feedbacks',
        icon: MessageSquare,
        href: '/app/posts',
        to: "app-posts"
    },
    {
        name: "Users",
        icon: Users,
        href: '/app/users',
        to: "app-users"
    },
    {
        name: 'Settings',
        icon: Settings,
        href: '/app/settings',
        to: "app-settings"
    },
    {
        name: 'Developer Guide',
        icon: Code,
        href: '/app/embed-code',
        to: "app-embed-code"
    }
]

const route = useRoute()

const isActive = (item) => {
    // Handle root dashboard item separately
    if (item.href === '/app') {
        return route.path === '/app'
    }

    // For other items, check if the current path starts with their specific path
    return route.path.startsWith(item.href + '/') || route.path === item.href
}
</script>


<template>
    <div class="min-h-screen bg-base-100 flex container max-w-5xl mx-auto">
        <Toaster />
        <!-- Sidebar - desktop -->
        <aside class="hidden lg:flex flex-col w-56 items-center">
            <!-- Logo -->
            <div class="px-4 py-5">
                <div class="flex items-center gap-2">
                    <img src="/logo.svg" class="h-8 w-auto" />
                    <span class="text-xl font-bold">PulseKit</span>
                </div>
            </div>

            <UserButton show-name />

            <!-- Nav -->
            <nav class="flex-1 py-4 px-2 space-y-4">
                <ul class="space-y-1">
                    <li v-for="item in items" :key="item.name">
                        <NuxtLink :to="{ name: item.to }"
                            class="flex items-center gap-3 text-sm px-3 py-2 rounded-md text-base-content hover:bg-base-200 hover:text-base-content active:bg-base-300/50 transition-colors duration-300"
                            :class="{ 'bg-base-200 text-primary/80 hover:text-primary/70': isActive(item) }">
                            <component :is="item.icon" class="size-4 text-base-content/50" stroke-width="2.5" />
                            {{ item.name }}
                        </NuxtLink>
                    </li>
                </ul>

                <NuxtLink to="/app/feedback" class="btn btn-info btn-wide btn-outline btn-sm">
                    <MessageCircleHeart class="size-4 text-error" />
                    Share your feedback
                </NuxtLink>
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
