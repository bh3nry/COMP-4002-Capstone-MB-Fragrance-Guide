import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import * as favouriteService from "../../services/favouriteService";
import { useNotes } from "../../hooks/useNotes";
import { useSearchNotes } from "../../hooks/useSearchNotes";
import type { FrontendNotes as Notes } from '@shared/types/frontend-notes';
import NoteDisplay from "../commons/notes/noteList";
import SearchBar from "../commons/searchbar/SearchBar"
import "./notes.css";

const NotesPage = (): React.JSX.Element => {

    const { notes, fetchNotes } = useNotes();
    const { getToken, isSignedIn } = useAuth();
    const {
        searchValue,
        setSearchValue,
        trySearch
    } = useSearchNotes();

    const [searchMessages, setSearchMessages] = useState<string[]>([]);
    const [, setSearchLength] = useState(0);

    const noteFilter = (noteEle: Notes) => {
        if (searchValue.trim().length >= 2) {
            return noteEle.name.toLowerCase().includes(searchValue.toLowerCase().trim());
        }

        return true;
    };

    const handleToggleFavourite = async (noteId: number) => {
        try {
            if (!isSignedIn) {
                return;
            }

            const token = await getToken();
            if (!token) {
                return;
            }

            await favouriteService.toggleFavouriteNotes(noteId, token);
            await fetchNotes();
        } catch (error) {
            console.error("Unable to toggle favourite", error);
        }
    };

    useEffect(() => {
        const debounceSearch = setTimeout(() => {
            const validSearch = trySearch().isValid;
            if(validSearch) {
                setSearchLength(searchValue.length);
            } else {
                setSearchLength(0);
            }
        }, 100);

        return () => clearTimeout(debounceSearch);
    }, [searchValue, trySearch, setSearchLength]);

    return (
        <>
            <h1>Scent Notes</h1>
            <SearchBar searchValue={searchValue}
                       messages={searchMessages}
                       onSearch={e => {
                            setSearchMessages([]);
                            setSearchValue(e);
                       }} />
            <div className="notes-page">
                {(
                    notes.filter(noteFilter).map((note: Notes) => (
                        <NoteDisplay
                            key={note.id}
                            notes={note}
                            onSaveClick={() => handleToggleFavourite(note.id)}
                        />
                    ))
                )}
            </div>
        </>
    );
}

export default NotesPage;