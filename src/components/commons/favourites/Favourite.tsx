import NoteDisplay from "../notes/noteList"
import type { NotesTagsProps, Notes } from "../notes/notes-data"
import "./favourite-style.css"

function Favourites({
    favNotes,
    setFavNotes
    }:
    NotesTagsProps) { 

    const handleNotesFavouriteClick = (notesClicked: Notes): void => {
        const updatedNotes = favNotes.map((n) => {
            if (n.name === notesClicked.name) {
                return { ...n, isFavourite: !n.isFavourite};
            }
            return n;
        });
        setFavNotes(updatedNotes)
    }

    const notesListItems = favNotes.map((s) => {
        return (
            <NoteDisplay
                notes={s}

                onSaveClick={() => {
                    handleNotesFavouriteClick(s);
                }}
                key={s.name}
            />
        )
    })
    
    return (
        <section>
            <h1>Favourite Scents</h1>
            <div className="divstyle">
                {notesListItems}
            </div>
        </section>
    );
}

export default Favourites;