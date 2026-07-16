import { locRepo } from "../apis/locRepo";
import type { RecommendationLocation } from "../apis/locRepoData";

export const locService = {

    // returns all location data from the repository
    getAll: async (): Promise<RecommendationLocation[]> => {
        return await locRepo.getAll();
    },

    // returns a location by fragrance id
    getByFragranceId: async (id: number): Promise<RecommendationLocation | undefined> => {
        return await locRepo.getById(id);
    },
};