import type { CompetitorComparison } from './types'

const cannyData: CompetitorComparison = {
    id: 'canny',
    name: 'Canny',
    logo: '/logos/canny-logo.svg',
    shortDescription: 'Popular feedback management platform that lives outside your product',
    longDescription: 'Canny is a popular feedback platform that collects and organizes user feedback. Unlike PulseKit, Canny requires users to leave your product and create separate accounts to submit feedback, creating friction in the user experience.',
    topBenefit: 'PulseKit keeps users in your app, no account required',
    keyDifferences: [
        'PulseKit embeds directly in your product UI with no redirects',
        'No need for users to create separate accounts',
        'Native integration with your existing authentication',
        'Simpler developer experience with fewer configuration steps'
    ],
    seoKeywords: ['Canny alternative', 'Canny vs PulseKit', 'embedded feedback', 'in-app feedback', 'feedback widget'],
    seoDescription: 'Looking for a Canny alternative? PulseKit offers embedded feedback collection without requiring users to leave your app or create new accounts. Compare features and benefits.',
    seoTitle: 'Canny Alternative | PulseKit Embedded Feedback Solution',
    features: [
        {
            name: 'User Feedback Collection',
            pulseKitHas: true,
            competitorHas: true,
            description: 'Both platforms collect user feedback, but PulseKit does it without redirecting users away from your product.'
        },
        {
            name: 'Embedded Widget',
            pulseKitHas: true,
            competitorHas: false,
            description: 'PulseKit embeds directly in your UI with native styling, while Canny requires users to navigate to an external portal.'
        },
        {
            name: 'No User Account Creation',
            pulseKitHas: true,
            competitorHas: false,
            description: 'PulseKit uses your existing authentication while Canny requires users to create separate accounts.'
        },
        {
            name: 'Feature Voting',
            pulseKitHas: true,
            competitorHas: true,
            description: 'Both platforms allow users to vote on feedback, but PulseKit keeps this interaction within your product.'
        },
        {
            name: 'Changelogs',
            pulseKitHas: true,
            competitorHas: true,
            description: 'Both offer changelogs, but PulseKit delivers them contextually inside your application.'
        },
        {
            name: 'Developer-First Experience',
            pulseKitHas: true,
            competitorHas: false,
            description: 'PulseKit offers simpler integration with cleaner APIs and less configuration overhead.'
        }
    ],
    pricingComparison: {
        pulseKit: 'Starting at $29/mo for Growth plan',
        competitor: 'Starting at $50/mo for Business plan',
        savingsDescription: 'Save over 40% while getting a more native integration for your users.',
        pricingParagraphs: [
            "PulseKit offers significant value compared to Canny, with plans starting at just $29/mo versus Canny's $50/mo entry point.",
            "This represents a 40% cost saving while providing a superior user experience. Unlike Canny's external portal that requires separate user accounts, PulseKit's embedded approach keeps feedback collection within your product, improving engagement and reducing friction.",
            "Your budget goes further with PulseKit, funding not just a feedback tool but a seamlessly integrated user experience that respects your product's design and your users' time."]
    }
}

export default cannyData 