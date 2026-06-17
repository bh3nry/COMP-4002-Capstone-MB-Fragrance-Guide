import { mockNotesData } from "./mockNotesData";
import type { Notes } from "../types/notesType";

//Repository for maanaging fragrance notes data, including fetching all notes, 
// fetching a note by ID, and adding/removing notes from favourites 

export function getAllNotes(): Notes[] {
    return mockNotesData;
}

export function getNotesById(seasonID: number): Notes {
    const findSeason = mockNotesData.find(s => 
        s.id === seasonID);

    if(!findSeason) {
        throw new Error(`Failed to fetch season with ${seasonID}`);
    }

    return findSeason;

}

export async function addFavouriteNotes(seasonID: number) {
    const findNotes = mockNotesData.find(s => s.id === seasonID);

    if(!findNotes) {
        throw new Error(`Failed to fetch notes with ${seasonID}`);
    } else {
        findNotes.isFavourite = true;
    }

    return findNotes;
}

export async function removeFavouriteNotes(seasonID: number) {
    const findNotes = mockNotesData.find(s => s.id === seasonID);

    if(!findNotes) {
        throw new Error(`Failed to fetch notes with ${seasonID}`);
    } else {
        findNotes.isFavourite = false;
    }

    return findNotes;
}