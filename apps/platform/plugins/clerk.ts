import { clerkPlugin } from '@clerk/vue'


export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    nuxtApp.vueApp.use(clerkPlugin, {
        publishableKey: config.public.clerkPublishableKey,
    })
})