<script setup lang="ts">
import { Menu } from 'lucide-vue-next';

useSeoMeta({
    title: 'PulseKit',
    description: 'Get user feedback that actually matters',
})
</script>

<template>
    <div data-theme="caramellatte">
        <div class="navbar">
            <div class="flex-1">
                <a href="/" class="inline-flex items-center gap-2 p-2">
                    <img src="/logo.svg" alt="PulseKit" class="h-8">
                    <span class="text-xl pb-1 font-bold text-secondary font-lora">PulseKit</span>
                </a>
            </div>
            <div class="flex items-center gap-2">
                <ul class="menu menu-horizontal px-1">
                    <li class="hidden md:block"><a href="https://x.com/jfdelarosa" target="_blank">@jfdelarosa</a></li>
                    <li class="block md:hidden">
                        <details>
                            <summary>
                                <Menu class="size-4" />
                            </summary>
                            <ul class="bg-base-100 rounded-t-none p-2 !right-0 w-[200px]">
                                <li><a href="https://x.com/jfdelarosa" target="_blank">@jfdelarosa</a></li>
                                <li>
                                    <nuxt-link to="/sign-up" class="btn btn-secondary">
                                        Get Started
                                    </nuxt-link>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>

                <nuxt-link to="/sign-up" class="btn btn-secondary hidden md:flex">
                    Get Started
                </nuxt-link>
            </div>
        </div>

        <slot />

        <footer
            class="footer sm:footer-horizontal bg-base-300 text-base-content justify-center md:justify-between items-center p-4">
            <aside class="flex flex-col md:w-full md:flex-row items-center justify-center md:justify-start w-full">
                <img src="/logo.svg" alt="PulseKit" class="h-12">

                <p>Created by <a href="https://x.com/jfdelarosa" target="_blank"
                        class="font-lora font-bold hover:underline">@jfdelarosa</a> with ❤️</p>
            </aside>
            <nav class="grid-flow-col gap-4 w-full items-center justify-center">
                <a href="https://github.com/jfdelarosa/pulsekit" target="_blank">
                    <svg role="img" class="size-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>GitHub</title>
                        <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                </a>
                <a href="https://x.com/jfdelarosa" target="_blank">
                    <svg role="img" class="size-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>X</title>
                        <path
                            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                </a>
            </nav>
        </footer>
    </div>
</template>