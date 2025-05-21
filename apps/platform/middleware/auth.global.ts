const isProtectedPage = createRouteMatcher(['/app(.*)', '/welcome'])
const isGuestPage = createRouteMatcher(['/sign-(in|up)'])

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { isLoaded, userId } = useAuth()

    if (from.path === '/sign-in' || from.path === '/sign-up') {
        return
    }

    // Wait until Clerk is loaded
    while (!isLoaded.value) {
        await new Promise(resolve => setTimeout(resolve, 10))
    }

    if (userId.value && isGuestPage(to)) {
        return navigateTo('/app')
    }

    if (!userId.value && isProtectedPage(to)) {
        return navigateTo('/sign-in')
    }
})