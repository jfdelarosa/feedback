<script setup lang="ts">
const logos = [
    {
        src: "/logos/lunanotes.png",
        alt: "LunaNotes",
        class: "h-20",
        link: "https://lunanotes.io"
    },
    {
        src: "/logos/mindy.png",
        alt: "Mindy",
        class: "h-8",
        link: "https://mindy.gt/"
    },
    {
        src: "/logos/tumenudigital.png",
        alt: "TuMenuDigital.mx",
        class: "h-20",
        link: "https://tumenudigital.mx"
    },
    {
        src: "/logos/rizk.png",
        alt: "Rizk",
        class: "h-16",
        link: "https://rizk.tools"
    },
]
</script>
<template>
    <section id="logos">
        <div class="container max-w-7xl mx-auto pt-4">
            <h2 class="text-xl font-lora font-bold text-center text-accent">Trusted by</h2>


            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-2xl mx-auto px-6 items-center justify-center">
                <a v-for="logo in logos" :key="logo.src" :href="logo.link" target="_blank">
                    <img :src="logo.src" :alt="logo.alt"
                        class="w-full object-contain filter brightness-0 opacity-50 hover:brightness-100 transition-all duration-300 hover:opacity-100"
                        :class="logo.class" />
                </a>
            </div>
        </div>
    </section>
</template>