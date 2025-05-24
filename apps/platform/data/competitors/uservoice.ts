import type { CompetitorComparison } from './types'

const uservoiceData: CompetitorComparison = {
    id: 'uservoice',
    name: 'UserVoice',
    logo: '/logos/uservoice-logo.svg',
    shortDescription: 'Enterprise feedback and research platform with complex workflows',
    longDescription: 'UserVoice is an enterprise-focused feedback and product research platform with complex workflows. While powerful, it can be overwhelming and difficult to integrate smoothly into your product, unlike PulseKit\'s streamlined approach.',
    topBenefit: 'PulseKit offers simpler integration and modern UI',
    keyDifferences: [
        'PulseKit has a modern, clean interface that feels native to your product',
        'Simpler implementation requiring less development resources',
        'More affordable pricing for startups and growing companies',
        'No redirection to external feedback portals'
    ],
    seoKeywords: ['UserVoice alternative', 'UserVoice vs PulseKit', 'user feedback tools', 'product feedback widget', 'embedded feedback solution'],
    seoDescription: 'Looking for a simpler UserVoice alternative? PulseKit provides embedded feedback collection with better UX and easier implementation. Compare features and benefits.',
    seoTitle: 'UserVoice Alternative | PulseKit Modern Feedback Solution',
    features: [
        {
            name: 'Feedback Collection',
            pulseKitHas: true,
            competitorHas: true,
            description: 'Both collect feedback, but PulseKit does it with a cleaner UX that stays within your product.'
        },
        {
            name: 'Native Integration',
            pulseKitHas: true,
            competitorHas: false,
            description: 'PulseKit feels like part of your product, while UserVoice feels like a separate platform.'
        },
        {
            name: 'Implementation Complexity',
            pulseKitHas: true,
            competitorHas: false,
            description: 'PulseKit can be implemented in minutes, while UserVoice requires significant configuration.'
        },
        {
            name: 'Feedback Analytics',
            pulseKitHas: true,
            competitorHas: true,
            description: 'Both provide analytics on user feedback, with PulseKit focusing on actionable insights.'
        },
        {
            name: 'Developer Resources Required',
            pulseKitHas: true,
            competitorHas: false,
            description: 'PulseKit requires minimal developer resources, while UserVoice implementation is more intensive.'
        }
    ],
    pricingComparison: {
        pulseKit: 'Starting at $29/mo for Growth plan',
        competitor: 'Starting at $499/mo for Pro plan',
        savingsDescription: 'Save over 90% compared to UserVoice while getting a more streamlined solution.'
    }
}

export default uservoiceData 