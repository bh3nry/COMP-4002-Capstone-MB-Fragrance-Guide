import type { RecommendationLocation } from "./locRepoData";

const BASE_URL = "http://localhost:3000";

export const locRepo = {

    // fetches all locations from the backend
    getAll: async (): Promise<RecommendationLocation[]> => {
        const response = await fetch(`${BASE_URL}/locations`);
        if (!response.ok) {
            throw new Error("Failed to fetch locations");
        }
        return await response.json();
    },

    // fetches a single location by id from the backend
    getById: async (id: number): Promise<RecommendationLocation | undefined> => {
        const response = await fetch(`${BASE_URL}/locations/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch location with id ${id}`);
        }
        return await response.json();
    },
};