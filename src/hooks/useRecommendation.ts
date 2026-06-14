import { RecommendationService } from "../services/recService";
import type { RecommendationLocation } from "../apis/recRepoData";

export function useRecommendations(): RecommendationLocation[] {
    return RecommendationService.getAll();
}