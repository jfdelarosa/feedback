<script setup lang="ts">
import { SignedIn, SignedOut, SignInButton, UserButton, Waitlist } from '@clerk/vue'
</script>

<template>
    <header>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>

        <Waitlist />
    </header>
</template>