import { useUser } from "@clerk/vue"

export default defineNuxtRouteMiddleware((to) => {
    const { isSignedIn } = useUser()

    if (!to.path.includes('app')) {
        return
    }

    if (!isSignedIn.value) {
        return navigateTo('/')
    }
})