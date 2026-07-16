import { locRepo } from "../apis/locRepo";

type RecLocation = {
    id: number;
    fragranceId: number;
    saleLocations: { id: number; name: string; locationId: number }[];
}

export const locService = {

    // returns all location data from the repository
    getAll: async (): Promise<RecLocation[]> => {
        return await locRepo.getAll();
    },

    // returns a single location by location id
    getByLocationId: async (id: number): Promise<RecLocation | undefined> => {
        return await locRepo.getByLocationId(id);
    },
};