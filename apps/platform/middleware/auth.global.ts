import { useAuthStore } from '@/stores/auth'

export default defineNuxtRouteMiddleware(async (to) => {
    const isAuthPage = to.path.includes('sign-in') || to.path.includes('sign-up');
    const isOnboardingPage = to.path.startsWith('/welcome');
    const isAppRoute = to.path.startsWith('/app') || isAuthPage || isOnboardingPage;

    if (!isAppRoute) {
        return;
    }

    const auth = useAuthStore();

    console.log(`[Auth Middleware] Path: ${to.path}, Auth loading: ${auth.isLoading}, Auth state: ${auth.isAuthenticated}, Has orgs: ${auth.hasOrganizations}`);

    // If auth is still loading or not initialized, don't redirect
    if (auth.isLoading || !auth.isInitialized) {
        console.log('[Auth Middleware] Auth still loading or not initialized, continuing...');
        return;
    }


    // Prevent redirect loops by checking if we're already being redirected
    // If we detect a potential loop, allow the navigation
    if (to.query._noloop) {
        console.log('[Auth Middleware] Loop prevention detected, continuing...');
        return;
    }

    // If not on auth page and user is not authenticated, redirect to login
    if (!isAuthPage && !auth.isAuthenticated) {
        console.log('[Auth Middleware] Not authenticated and not on auth page, redirecting to login');
        return navigateTo({
            path: `/sign-in`,
            query: {
                redirect: encodeURIComponent(to.fullPath),
                _noloop: '1' // Add a marker to prevent redirect loops
            }
        });
    }

    // If user is authenticated and tries to access auth pages, redirect to home
    if (isAuthPage && auth.isAuthenticated) {
        console.log('[Auth Middleware] Authenticated and on auth page, redirecting to home');
        return navigateTo({
            path: '/',
            query: { _noloop: '1' }
        });
    }

    // Handle organization requirements for authenticated users on non-auth pages
    if (auth.isAuthenticated && !isAuthPage) {
        console.log('[Auth Middleware] Authenticated on non-auth page, checking organizations');

        console.log(!isOnboardingPage)
        console.log(!auth.hasOrganizations)

        // If user has no organizations and not on onboarding
        if (!auth.hasOrganizations && !isOnboardingPage) {
            console.log('[Auth Middleware] No organizations and not on onboarding, redirecting to onboarding');
            return navigateTo({
                path: '/welcome',
                query: { _noloop: '1' }
            });
        }

        // If user has organizations but tries to access onboarding
        if (auth.hasOrganizations && isOnboardingPage) {
            console.log('[Auth Middleware] Has organizations but on onboarding, redirecting to home');
            return navigateTo({
                path: '/',
                query: { _noloop: '1' }
            });
        }

        // // If user has organizations but needs to select one
        // if (auth.hasOrganizations && auth.organizations.length > 1) {
        //   return navigateTo('/settings/organizations');
        // } else if (auth.hasOrganizations && auth.organizations.length === 1) {
        //   await auth.setActiveOrganization(auth.organizations[0].id);
        // }
    }

    // Continue to the requested page
    console.log('[Auth Middleware] No redirects needed, continuing to requested page');
    return;
});