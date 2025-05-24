type PricingPlan = {
    name: string
    price: number
    formatedPrice: string
    features: string[]
    period: string
    description: string
    cta: string
    highlighted: boolean
    badge?: string
}

export const usePricing = () => {
    const freePlan: PricingPlan = {
        name: "Free",
        price: 0,
        formatedPrice: "$0",
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
    }

    const proPlan: PricingPlan = {
        name: "Growth",
        price: 49,
        formatedPrice: "$49",
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
    }

    const enterprisePlan: PricingPlan = {
        name: "Scale",
        price: 199,
        formatedPrice: "$199",
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

    const plans = [freePlan, proPlan, enterprisePlan]

    return {
        freePlan,
        proPlan,
        enterprisePlan,
        plans,
    }
}