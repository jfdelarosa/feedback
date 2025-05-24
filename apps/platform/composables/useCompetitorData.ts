import { ref } from 'vue'
import type { CompetitorComparison } from '../data/competitors/types'

// Import all competitor data
import cannyData from '../data/competitors/canny'
import uservoiceData from '../data/competitors/uservoice'
import productboardData from '../data/competitors/productboard'

// Add more competitor imports here as needed
// import noltData from '../data/competitors/nolt'
// import beamerData from '../data/competitors/beamer'

export function useCompetitorData() {
    // Create record of competitor data
    const competitorsArray = [
        cannyData,
        uservoiceData,
        productboardData,
        // Add more competitors here as they are created
        // noltData,
        // beamerData,
    ]

    // Convert to a record for easy lookup by ID
    const competitors = ref<Record<string, CompetitorComparison>>(
        competitorsArray.reduce((acc, competitor) => {
            acc[competitor.id] = competitor
            return acc
        }, {} as Record<string, CompetitorComparison>)
    )

    return {
        competitors,
        // Helper function to get competitor by ID
        getCompetitor: (id: string) => competitors.value[id] || null,
        // Get all competitors as an array
        getAllCompetitors: () => Object.values(competitors.value)
    }
} 