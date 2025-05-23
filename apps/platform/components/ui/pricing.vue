<script setup lang="ts">
import { Check, Star } from 'lucide-vue-next';

const plans = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "For early-stage products and makers.",
        features: [
            "Up to 250 feedback items",
            "1 feedback board",
            "Basic analytics dashboard",
            "Email notifications",
            "Community support",
            "PulseKit watermark (required)"
        ],
        cta: "Start Free",
        highlighted: false,
    },
    {
        name: "Growth",
        price: "$49",
        period: "per month",
        description: "For SaaS teams ready to scale.",
        features: [
            "Up to 5,000 feedback items",
            "Up to 3 feedback boards",
            "3 team members",
            "Advanced analytics & reporting",
            "Priority support",
            "Export to CSV/JSON"
        ],
        cta: "Start Free Trial",
        highlighted: true,
        badge: "Most Popular"
    },
    {
        name: "Scale",
        price: "$199",
        period: "per month",
        description: "For large teams and enterprises.",
        features: [
            "Everything in Growth, plus:",
            "Unlimited feedback items",
            "Unlimited feedback boards",
            "Unlimited team members",
            "Slack & webhook integrations",
            "API access",
            "No PulseKit watermark",
        ],
        cta: "Contact Sales",
        highlighted: false
    }
];
</script>

<template>
    <section id="pricing" class="bg-base-100 py-24 px-6">
        <div class="container max-w-6xl mx-auto">
            <div class="text-center mb-16 px-4">
                <h2 class="text-3xl md:text-5xl font-lora font-bold text-base-content mb-4">
                    Choose the Right Plan for Your Team
                </h2>
                <p class="text-xl font-lato text-base-content/70 max-w-2xl mx-auto">
                    Start free and scale as you grow. No hidden fees, no surprises.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                <div v-for="plan in plans" :key="plan.name" :class="[
                    'card bg-white shadow-xl shadow-base-300/50',
                    plan.highlighted ? 'border-2 border-neutral scale-105' : 'border border-base-200'
                ]">
                    <div class="card-body">
                        <div v-if="plan.badge" class="badge badge-neutral badge-lg mb-4">
                            <Star class="size-4" />
                            {{ plan.badge }}
                        </div>

                        <h3 class="text-2xl font-bold text-base-content font-lora">{{ plan.name }}</h3>
                        <p class="text-base-content/60 text-sm font-lato">{{ plan.description }}</p>

                        <div class="mb-6">
                            <span class="text-5xl font-bold text-base-content font-lato">{{ plan.price }}</span>
                            <span class="text-base-content/60 ml-2 font-lato">{{ plan.period }}</span>
                        </div>

                        <ul class="space-y-3 mb-8 flex-grow">
                            <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-3">
                                <Check class="size-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span class="text-sm text-base-content/80 font-lato">{{ feature }}</span>
                            </li>
                        </ul>

                        <a href="https://tally.so/r/3lZypW" target="_blank" :class="[
                            'btn w-full',
                            plan.highlighted ? 'btn-neutral' : 'btn-outline btn-primary'
                        ]">
                            <!-- {{ plan.cta }} -->

                            Join Waitlist
                        </a>
                    </div>
                </div>
            </div>

            <!-- <div class="mt-16 text-center">
                <p class="text-base-content/60 mb-4">
                    All paid plans include a 14-day free trial. No credit card required to start.
                </p>
                <p class="text-sm text-base-content/50">
                    Need a custom plan? <a href="/contact" class="link link-primary">Contact our sales team</a>
                </p>
            </div> -->
        </div>
    </section>
</template>