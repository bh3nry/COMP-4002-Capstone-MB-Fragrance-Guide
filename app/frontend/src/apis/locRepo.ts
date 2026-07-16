const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";

type RecLocation = {
    id: number;
    fragranceId: number;
    saleLocations: { id: number; name: string; locationId: number }[];
}

export const locRepo = {

    // fetches all locations from the backend
    getAll: async (): Promise<RecLocation[]> => {
        const response = await fetch(`${BASE_URL}/api/v1/locations`);
        if (!response.ok) {
            throw new Error("Failed to fetch locations");
        }
        return await response.json();
    },

    // fetches a single location by id from the backend
    getByLocationId: async (id: number): Promise<RecLocation | undefined> => {
        const response = await fetch(`${BASE_URL}/api/v1/locations/${id}`);
        if (response.status === 404) {
            return undefined;
        }
        if (!response.ok) {
            throw new Error(`Failed to fetch location with id ${id}`);
        }
        return await response.json();
    },
};