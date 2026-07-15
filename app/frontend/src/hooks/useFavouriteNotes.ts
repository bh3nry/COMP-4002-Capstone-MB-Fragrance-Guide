import { useCallback, useEffect } from "react";
import { useForm } from "./useForm";
import type { Notes } from '../types/notesType'
import * as notesService from "../services/seasonService";
import * as NotesRepo from "../apis/notesRepo";


/* * Custom hook for managing favourite fragrance notes
 * @param filterN: an optional function that can be used to filter the notes based on specific criteria
 * @returns an object containing the list of favourite notes and a function to toggle the favourite status of a note
 */
export const useFavouriteNotes = (
    filterN?: ((notes: Notes) => boolean)|null,
) => {
    const { favNotes, setFavNotes } = useForm();
    
    const fetchNotes = useCallback(async () => {
            let result = await NotesRepo.getAllNotes();

            if (filterN) {
                result = result.filter(filterN);
            }
            setFavNotes([...result]);
    }, [filterN]);

    const toggleFavourite = async (notesId: number) => {
        await notesService.toggleFavouriteNotes(notesId);
        await fetchNotes();
    };

    useEffect(() => {
        fetchNotes();
    }, [fetchNotes]);

    return { favNotes, toggleFavourite };
};
