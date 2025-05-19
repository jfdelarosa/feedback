const isProtectedRoute = createRouteMatcher(['/app(.*)'])

export default defineNuxtRouteMiddleware((to) => {
    const { userId } = useAuth()

    // If the user is not signed in, they aren't allowed to access
    // the protected route and are redirected to the sign-in page
    if (!userId.value && isProtectedRoute(to)) {
        return navigateTo('/sign-in')
    }
})