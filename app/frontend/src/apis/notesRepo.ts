import type { FrontendNotes as Notes } from '@shared/types/frontend-notes';

type NotesResponseJSON = {message: string, data: Notes[]};
type NoteResponseJSON = {message: string, data: Notes};

//Repository for maanaging fragrance notes data, including fetching all notes, 
// fetching a note by ID, and adding/removing notes from favourites 
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const NOTES_ENDPOINT = "/notes"

export async function getAllNotes(sessionToken?: string | null): Promise<Notes[]> {
    const noteResponse: Response = await fetch(
        `${BASE_URL}${NOTES_ENDPOINT}`,
        sessionToken? {
            headers: {
                Authorization: `Bearer ${sessionToken}`,
            }
        } : undefined
    );

    if(!noteResponse.ok) {
        throw new Error("Failed to fetch terms");
    }

    const json: NotesResponseJSON = await noteResponse.json();
    return json.data;
}

export async function getNotesById(notesId: number, sessionToken?: string | null): Promise<Notes> {
    const noteResponse: Response = await fetch(
        `${BASE_URL}${NOTES_ENDPOINT}/${notesId}`,
        sessionToken? {
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        } : undefined
    );

    if(!noteResponse.ok) {
        throw new Error(`Failed to fetch notes with id ${notesId}`);
    }

    const json: NoteResponseJSON = await noteResponse.json();
    return json.data;
}
