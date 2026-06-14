import { RecommendationRepository } from "../apis/recRepo";
import type { RecommendationLocation } from "../apis/recRepoData";

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