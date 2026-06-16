import { RecommendationService } from "../services/locService";
import type { RecommendationLocation } from "../apis/locRepoData";

export function useRecommendations(): RecommendationLocation[] {
    return RecommendationService.getAll();
}