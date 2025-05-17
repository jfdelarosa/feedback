<template>
    <div class="flex flex-col justify-center items-center min-h-screen gap-6">
        <a href="/" class="inline-flex items-center gap-3 p-2">
            <img src="/logo.svg" alt="PulseKit" class="h-10">
            <span class="text-2xl pb-1 font-bold text-secondary font-lora">PulseKit</span>
        </a>
        <slot />
    </div>
</template>