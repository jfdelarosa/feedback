export interface CompetitorFeature {
    name: string
    pulseKitHas: boolean
    competitorHas: boolean
    description: string
}

export interface CompetitorComparison {
    id: string
    name: string
    logo: string
    shortDescription: string
    longDescription: string
    topBenefit: string
    keyDifferences: string[]
    seoKeywords: string[]
    seoDescription: string
    seoTitle: string
    features: CompetitorFeature[]
    pricingComparison: {
        pulseKit: string
        competitor: string
        savingsDescription: string
        pricingParagraphs: string[]
    }
} 