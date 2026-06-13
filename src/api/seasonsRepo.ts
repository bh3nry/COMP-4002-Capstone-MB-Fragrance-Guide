import { mockSeasonData } from "./mockSeasonsData";
import type { Notes } from "../components/commons/notes/notes-data";

export function getNotesBySeason(seasonID: string): Notes {
    const findSeason = mockSeasonData.find(s => {
        s.info.map((d) => d.season === seasonID)
    });

    if(!findSeason) {
        throw new Error(`Failed to fetch season with ${seasonID}`)
    }

    return findSeason;

}