import type { CompetitorComparison } from './types'

const productboardData: CompetitorComparison = {
    id: 'productboard',
    name: 'ProductBoard',
    logo: '/logos/productboard-logo.svg',
    shortDescription: 'Product management system focused on prioritization',
    longDescription: 'ProductBoard is a comprehensive product management platform focused on organizing and prioritizing feedback. While robust for internal teams, it lacks the seamless user-facing feedback collection that PulseKit offers directly within your product.',
    topBenefit: 'PulseKit embeds directly in your product UI',
    keyDifferences: [
        'PulseKit focuses on the end-user experience, embedding feedback collection in your UI',
        'More affordable for growing companies',
        'Simpler setup with less configuration',
        'Direct user-to-product-team communication without intermediaries'
    ],
    seoKeywords: ['ProductBoard alternative', 'ProductBoard vs PulseKit', 'embedded feedback', 'product feedback collection', 'user-centric feedback'],
    seoDescription: 'Looking for a more user-focused ProductBoard alternative? PulseKit puts feedback collection directly in your product UI. Compare features and pricing.',
    seoTitle: 'ProductBoard Alternative | PulseKit User-Centric Feedback Solution',
    features: [
        {
            name: 'Feedback Collection',
            pulseKitHas: true,
            competitorHas: true,
            description: 'Both collect feedback, but PulseKit does it directly within your product UI.'
        },
        {
            name: 'User-Facing Interface',
            pulseKitHas: true,
            competitorHas: false,
            description: 'PulseKit provides a beautiful user-facing interface, while ProductBoard is primarily internal-facing.'
        },
        {
            name: 'Implementation Simplicity',
            pulseKitHas: true,
            competitorHas: false,
            description: 'PulseKit can be implemented quickly, while ProductBoard requires more setup and integration work.'
        },
        {
            name: 'Prioritization Tools',
            pulseKitHas: true,
            competitorHas: true,
            description: 'Both help teams prioritize feedback, with PulseKit focusing on direct user signals.'
        }
    ],
    pricingComparison: {
        pulseKit: 'Starting at $29/mo for Growth plan',
        competitor: 'Starting at $80/mo per maker for Essentials plan',
        savingsDescription: 'Save significantly with PulseKit\'s straightforward pricing versus ProductBoard\'s per-user model.'
    }
}

export default productboardData 