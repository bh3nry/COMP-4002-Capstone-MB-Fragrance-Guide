import * as NoteService from "../services/favouriteService";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import type { FrontendNotes as Notes } from '@shared/types/frontend-notes';

export function useNotes() {
    const { getToken, isSignedIn } = useAuth();
    const [notes, setAllNotes] = useState<Notes[]>([]);

    const fetchNotes = useCallback(async () => {
        const sessionToken = isSignedIn ? await getToken() : null;
        const result = await NoteService.getNotes(sessionToken);
        setAllNotes(result);
    }, [getToken, isSignedIn]);

    useEffect(() => {
        void fetchNotes();
    }, [fetchNotes]);

    return { notes, setAllNotes, fetchNotes };
}