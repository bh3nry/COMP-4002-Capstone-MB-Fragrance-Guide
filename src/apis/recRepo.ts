import { recommendationData } from "./recRepoData";
import type { RecommendationLocation } from "./recRepoData";

export const RecommendationRepository = {

    // returns all recommendation location data
    getAll(): RecommendationLocation[] {
        return recommendationData;
    },

    // returns a single recommendation location by id
    getById(id: number): RecommendationLocation | undefined {
        return recommendationData.find((r) => r.id === id);
    },

    // returns a recommendation location by fragrance id
    getByFragranceId(id: number): RecommendationLocation | undefined {
        return recommendationData.find((r) => r.fragrance.id === id);
    },
};