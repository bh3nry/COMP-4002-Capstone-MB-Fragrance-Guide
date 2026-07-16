import { fragranceData } from "./scentRepoData";
import type { Fragrance } from "./scentRepo";

export type RecommendationLocation = {
    id: number;
    fragrance: Fragrance;
    saleLocations: string[];
}

export const recommendationData: RecommendationLocation[] = [
    { id: 1, fragrance: fragranceData[0], saleLocations: ["Sephora", "Shoppers Drug Mart"] },
    { id: 2, fragrance: fragranceData[1], saleLocations: ["Chanel Boutique", "Holt Renfrew", "Nordstrom"] },
    { id: 3, fragrance: fragranceData[2], saleLocations: ["Sephora", "Shoppers Drug Mart"] },
    { id: 4, fragrance: fragranceData[3], saleLocations: ["Sephora"] },
    { id: 5, fragrance: fragranceData[4], saleLocations: ["Saks Fifth Ave"] },
    { id: 6, fragrance: fragranceData[5], saleLocations: ["Sephora", "Shoppers Drug Mart"] },
    { id: 7, fragrance: fragranceData[6], saleLocations: ["Holt Renfrew", "Nordstrom"] },
    { id: 8, fragrance: fragranceData[7], saleLocations: ["Sephora", "Shoppers Drug Mart"] },
    { id: 9, fragrance: fragranceData[8], saleLocations: ["Sephora", "Nordstrom"] },
    { id: 10, fragrance: fragranceData[9], saleLocations: ["Sephora", "Shoppers Drug Mart"] },
    { id: 11, fragrance: fragranceData[10], saleLocations: ["Nordstrom"] },
    { id: 12, fragrance: fragranceData[11], saleLocations: ["Sephora", "Shoppers Drug Mart"] },
    { id: 13, fragrance: fragranceData[12], saleLocations: ["Sephora", "Nordstrom"] },
    { id: 14, fragrance: fragranceData[13], saleLocations: ["Sephora", "Shoppers Drug Mart"] },
    { id: 15, fragrance: fragranceData[14], saleLocations: ["Nordstrom"] },
    { id: 16, fragrance: fragranceData[15], saleLocations: ["Sephora", "Shoppers Drug Mart"] },
    { id: 17, fragrance: fragranceData[16], saleLocations: ["Armani Store", "Nordstrom"] },
    { id: 18, fragrance: fragranceData[17], saleLocations: ["Sephora", "Shoppers Drug Mart"] },
    { id: 19, fragrance: fragranceData[18], saleLocations: ["Sephora", "Nordstrom"] },
    { id: 20, fragrance: fragranceData[19], saleLocations: ["Sephora", "Shoppers Drug Mart"] },
];