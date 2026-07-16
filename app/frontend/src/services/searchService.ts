import type { FrontendNotes as Notes } from '@shared/types/frontend-notes';
import * as NotesRepo from '../apis/notesRepo';

export function validateSearch(searchValue: string):{
        isValid: boolean;
        errors: string[];
} {
    let isValid = true;
    let errors: string[] = [];


    if(searchValue.trim().length < 2) {
        isValid = false;
        errors.push("Cannot search for fewer than two characters.");
    }

    return {isValid, errors};
}

export async function getNotesById(noteId: number) {
    const note: Notes = await NotesRepo.getNotesById(noteId);

    return note
}