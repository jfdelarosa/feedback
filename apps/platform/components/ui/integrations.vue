<script setup lang="ts">
import { SvglVueLogo, SvglReactLogo, SvglAngularLogo, SvglNextjsLogo, SvglSvelteLogo, SvglAstroLogo, SvglSolidjsLogo, SvglRemixLogo } from '@selemondev/svgl-vue';

// JS frameworks
const integrations = [
    { name: 'React', icon: SvglReactLogo },
    { name: 'Vue.js', icon: SvglVueLogo },
    { name: 'Angular', icon: SvglAngularLogo },
    { name: 'Next.js', icon: SvglNextjsLogo },
    { name: 'Svelte', icon: SvglSvelteLogo },
    { name: 'Astro', icon: SvglAstroLogo },
    { name: 'SolidJS', icon: SvglSolidjsLogo },
    { name: 'Remix', icon: SvglRemixLogo },
];
</script>

<template>
    <section id="integrations" class="bg-base-200 py-24">
        <div class="container mx-auto px-6 max-w-6xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-lora font-bold text-base-content mb-4">
                    Works with any framework
                </h2>
                <p class="text-xl font-lato text-base-content/70 max-w-3xl mx-auto">
                    Seamless integration with your existing stack
                </p>
            </div>


            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div v-for="framework in integrations" :key="framework.name"
                    class="card bg-base-100 shadow shadow-base-300/50">
                    <div class="card-body items-center text-center p-6">
                        <component :is="framework.icon" class="size-12 mb-2" />
                        <p class="text-sm font-medium text-base-content/80">{{ framework.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>