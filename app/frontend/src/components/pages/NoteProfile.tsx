
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { FrontendNotes as Notes } from "@shared/types/frontend-notes";
import NoteProfile from "../commons/notes/noteProfile";
import * as searchService from "../../services/searchService";

export function NoteProfilePage() {
    const { noteId } = useParams<{ noteId: string }>();
    const [note, setNote] = useState<Notes | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const loadNote = async () => {
            setIsLoading(true);

            try {
                const fetchedNote = await searchService.getNotesById(Number(noteId));
                setNote(fetchedNote);
            } finally {
                setIsLoading(false);
            }
        };

        if (noteId) {
            loadNote();
        } else {
            setIsLoading(false);
        }
    }, [noteId]);

    return (
        <>
            {isLoading ? (
                <p>Loading note...</p>
            ) : note ? (
                <NoteProfile notes={note} />
            ) : (
                <p>Note not found.</p>
            )}
        </>
    );
}
