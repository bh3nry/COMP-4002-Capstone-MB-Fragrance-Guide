import { RecommendationRepository } from "../apis/locRepo";
import type { RecommendationLocation } from "../apis/locRepoData";

export const RecommendationService = {

    // returns all recommendation location data
    getAll(): RecommendationLocation[] {
        return RecommendationRepository.getAll();
    },

    // returns sale locations for a specific fragrance id
    getByFragranceId(id: number): RecommendationLocation | undefined {
        return RecommendationRepository.getByFragranceId(id);
    },
};