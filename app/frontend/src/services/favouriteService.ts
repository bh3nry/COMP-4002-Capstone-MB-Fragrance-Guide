import * as NotesRepo from "../apis/notesRepo";
import * as NotesFavourites from "../apis/notesFavouriteRepo";
import type { FrontendNotes as Notes } from "@shared/types/frontend-notes";

/* Service function for managing fragrance notes, including fetching all notes and toggling the favourite status of a note
*/
export async function getNotes(sessionToken?: string | null
) {
    const notes = await NotesRepo.getAllNotes(sessionToken);
    return notes;
}

export async function toggleFavouriteNotes(notesId: number, sessionToken: string) {
    const notes: Notes = await NotesRepo.getNotesById(notesId, sessionToken);
    if(notes.isFavourite) {
        await NotesFavourites.deleteFavouriteNotes(
            notes.id,
            sessionToken
        );
    } else {
        await NotesFavourites.addFavouriteNotes(
            notes.id,
            sessionToken
        );
    }
}