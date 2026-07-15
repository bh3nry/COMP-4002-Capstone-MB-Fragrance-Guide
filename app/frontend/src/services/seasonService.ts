import * as NotesRepo from '../apis/notesRepo';
import type { Notes } from "../types/notesType";

/* Service function for managing fragrance notes, including fetching all notes and toggling the favourite status of a note
*/
export async function getNotes() {
    const notes = await NotesRepo.getAllNotes();
    return notes;
}

export async function toggleFavouriteNotes(notesId: number) {
    const notes: Notes = await NotesRepo.getNotesById(notesId);
    if(notes.isFavourite) {
        await NotesRepo.removeFavouriteNotes(notes.id);
    } else {
        await NotesRepo.addFavouriteNotes(notes.id);
    }
}