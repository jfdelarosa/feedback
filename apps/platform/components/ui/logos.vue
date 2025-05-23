<script setup lang="ts">
const logos = [
    {
        src: "/logos/lunanotes.png",
        alt: "LunaNotes",
        class: "h-10",
        link: "https://lunanotes.io"
    },
    {
        src: "/logos/mindy.png",
        alt: "Mindy",
        class: "h-8",
        link: "https://mindy.gt/"
    },
    {
        src: "/logos/rizk.png",
        alt: "Rizk",
        class: "h-16",
        link: "https://rizk.tools"
    },
    {
        src: "/logos/tumenudigital.png",
        alt: "TuMenuDigital.mx",
        class: "h-10",
        link: "https://tumenudigital.mx"
    },
]
</script>
<template>
    <section id="logos" class="container max-w-7xl mx-auto px-6 flex items-center justify-center">
        <div class="grid grid-cols-2 md:grid-cols-4 items-center">
            <a v-for="logo in logos" :key="logo.src" :href="logo.link" target="_blank"
                class="group flex items-center justify-center">
                <img :src="logo.src" :alt="logo.alt"
                    class="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                    :class="logo.class" />
            </a>
        </div>
    </section>
</template>

<style scoped>
@keyframes pulse-slow {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.95;
    }
}

.animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
}
</style>