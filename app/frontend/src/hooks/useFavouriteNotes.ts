import { useCallback, useEffect } from "react";
import { useForm } from "./useForm";
import type { FrontendNotes } from "@shared/types/frontend-notes"
import * as favouriteService from "../services/favouriteService";
import { useAuth } from "@clerk/clerk-react";


/* * Custom hook for managing favourite fragrance notes
 * @param filterN: an optional function that can be used to filter the notes based on specific criteria
 * @returns an object containing the list of favourite notes and a function to toggle the favourite status of a note
 */
export const useFavouriteNotes = (
    filterN?: ((notes: FrontendNotes) => boolean)|null,
) => {

    const { favNotes, setFavNotes } = useForm();
    const { getToken, isSignedIn } = useAuth();
    
    const fetchNotes = useCallback(async () => {
            let sessionToken = isSignedIn? await getToken() : null;
            let result = await favouriteService.getNotes(sessionToken);

            if (filterN) {
                result = result.filter(filterN);
            }
            setFavNotes([...result]);
    }, [filterN]);

    const toggleFavourite = async (notesId: number) => {
        try {
            let sessionToken = isSignedIn? await getToken() : null;

            if(!sessionToken) {
                throw new Error("Not Authorized");
            } else {
            await favouriteService.toggleFavouriteNotes(notesId, sessionToken);
            await fetchNotes();
            }
        } catch(error) {
            error
        }   
    };

    useEffect(() => {
        fetchNotes();
    }, [fetchNotes]);

    return { favNotes, toggleFavourite };
};
