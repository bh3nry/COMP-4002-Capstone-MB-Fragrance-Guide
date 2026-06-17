import NoteDisplay from "../notes/noteList"
import type { NotesTagsProps } from "../../../types/notesType"
import "./favourite-style.css"

function Favourites({
    title,
    favNotes,
    onToggleFavourite
    }:
    NotesTagsProps) { 

    const notesListItems = favNotes.map((s) => {
        return (
            <NoteDisplay
                notes={s}
                onSaveClick={() => {
                    onToggleFavourite(s.id);
                }}
                key={s.id}
            />
        )
    })
    
    return (
        <section>
            <h1>{title}</h1>
            <div className="divstyle">
                {notesListItems}
            </div>
        </section>
    );
}

export default Favourites;