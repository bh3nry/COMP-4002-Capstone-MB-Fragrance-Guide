import * as NoteService from "../services/favouriteService";
import { useCallback, useEffect, useState } from "react";
import type { FrontendNotes as Notes } from '@shared/types/frontend-notes';

export function useNotes() {

    const [notes, setAllNotes] = useState<Notes[]>([]);

    const fetchNotes = useCallback(async () => {
        const result = await NoteService.getNotes();
        setAllNotes(result);
    }, []);

    useEffect(() => {
        void fetchNotes();
    }, [fetchNotes]);

    return { notes, setAllNotes, fetchNotes };
}