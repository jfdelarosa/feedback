<script setup lang="ts">
import { PricingTable } from "@clerk/vue"
</script>

<template>
    <section id="pricing" class="bg-base-200 px-6">
        <div class="container max-w-4xl mx-auto py-16">

            <div class="text-center mb-12 px-4">
                <h2 class="text-3xl md:text-5xl font-lora font-bold text-secondary mb-4">Pricing</h2>
                <p class="text-xl font-lato text-accent/80 max-w-2xl mx-auto">
                    Choose the plan that's right for you.
                </p>
            </div>

            <PricingTable />
        </div>
    </section>
</template>