import { useEffect, useState } from "react";
import { useNotes } from "../../hooks/useNotes";
import { useSearchNotes } from "../../hooks/useSearchNotes";
import type { FrontendNotes as Notes } from '@shared/types/frontend-notes';
import NoteDisplay from "../commons/notes/noteList";
import SearchInput from "../commons/notes/noteSearch"
import "./notes.css";

const NotesPage = (): React.JSX.Element => {
    const { notes } = useNotes();
    const {
        searchValue,
        setSearchValue,
        trySearch
    } = useSearchNotes();

    const [searchMessages, setSearchMessages] = useState<string[]>([]);
    const [searchLength, setSearchLength] = useState(0);

    const noteFilter = (noteEle: Notes) => {
        if (searchValue.trim().length >= 2) {
            return noteEle.name.toLowerCase().includes(searchValue.toLowerCase().trim());
        }

        return true;
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
    }, [searchValue]);

    return (
        <>
            <h1>Scent Notes</h1>
            <SearchInput searchValue={searchValue}
                        messages={searchMessages}
                        handleSearchChange={e => {
                            setSearchMessages([]);
                            setSearchValue(e);
                        }}/>
            <div className="notes-page">
                {(
                    notes.filter(noteFilter).map((note: Notes) => (
                        <NoteDisplay key={note.id} notes={note} />
                    ))
                )}
            </div>
        </>
    );
}

export default NotesPage;