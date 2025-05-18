<script setup>
// Import Lucide icons
import { MessageSquare, ChevronDown, BarChart2, Users, Settings, Menu } from 'lucide-vue-next';

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
        <aside class="hidden lg:flex flex-col w-60">
            <!-- Logo -->
            <div class="px-4 py-5">
                <div class="flex items-center gap-2">
                    <img src="/logo.svg" class="h-8 w-auto" />
                    <span class="text-xl font-bold">PulseKit</span>
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

        <!-- Mobile drawer -->
        <div class="drawer lg:hidden flex-1">
            <input id="drawer-toggle" type="checkbox" class="drawer-toggle" />

            <div class="drawer-side z-40">
                <label for="drawer-toggle" aria-label="Close menu" class="drawer-overlay"></label>
                <div class="p-4 w-60 min-h-full bg-base-100 border-r border-base-200 flex flex-col">
                    <!-- Mobile menu content -->
                    <div class="flex items-center gap-2 pb-4 border-b border-base-200 mb-4">
                        <img src="/logo.svg" class="h-8 w-auto" />
                        <span class="text-xl font-bold">PulseKit</span>
                    </div>

                    <!-- Same navigation as desktop -->
                    <div class="mb-4">
                        <div class="relative">
                            <button
                                class="w-full flex items-center gap-2 text-base-content/70 rounded-lg border border-base-200 p-2">
                                <span class="flex items-center gap-2">
                                    <MessageSquare class="h-5 w-5" />
                                    Feedback Portal
                                </span>
                                <ChevronDown class="ml-auto h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <ul class="space-y-1 flex-1">
                        <li>
                            <a href="/app"
                                class="flex items-center gap-3 text-sm px-3 py-2 rounded-md bg-primary/10 text-primary font-medium">
                                <BarChart2 class="h-5 w-5" />
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="/app/feedback"
                                class="flex items-center gap-3 text-sm px-3 py-2 rounded-md text-base-content/70 hover:bg-base-200">
                                <MessageSquare class="h-5 w-5" />
                                Feedback
                            </a>
                        </li>
                        <li>
                            <a href="/app/team"
                                class="flex items-center gap-3 text-sm px-3 py-2 rounded-md text-base-content/70 hover:bg-base-200">
                                <Users class="h-5 w-5" />
                                Team
                            </a>
                        </li>
                        <li>
                            <a href="/app/settings"
                                class="flex items-center gap-3 text-sm px-3 py-2 rounded-md text-base-content/70 hover:bg-base-200">
                                <Settings class="h-5 w-5" />
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Main content container -->
            <div class="drawer-content flex flex-col">
                <!-- Top navbar -->
                <header class="sticky top-0 z-30 flex h-14 items-center border-b border-base-200 bg-base-100 px-4">
                    <div class="flex items-center gap-2">
                        <label for="drawer-toggle" aria-label="Open menu"
                            class="btn btn-ghost btn-sm drawer-button lg:hidden">
                            <Menu class="h-5 w-5" />
                        </label>
                        <h1 class="text-xl font-semibold">Analytics</h1>
                        <span class="text-sm text-base-content/60">pulsekit.com</span>
                    </div>

                    <div class="ml-auto flex items-center gap-3">
                        <div class="dropdown dropdown-end">
                            <button class="btn btn-ghost btn-sm">
                                <span class="hidden sm:inline">Last 14 days</span>
                                <ChevronDown class="h-4 w-4" />
                            </button>
                        </div>

                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-sm btn-circle avatar">
                                <div class="w-8 rounded-full">
                                    <img src="https://ui-avatars.com/api/?name=Admin&background=6419E6&color=fff"
                                        alt="User avatar" />
                                </div>
                            </label>
                            <ul tabindex="0"
                                class="mt-3 z-[1] p-2 shadow dropdown-content menu menu-sm bg-base-100 rounded-box w-52">
                                <li><a>Profile</a></li>
                                <li><a>Settings</a></li>
                                <li><a class="text-error">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </header>

                <!-- Page content -->
                <main class="flex-1 p-6 overflow-y-auto">
                    <slot />
                </main>
            </div>
        </div>

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
