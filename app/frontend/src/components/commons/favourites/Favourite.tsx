import NoteDisplay from "../notes/noteList"
import type { FrontendNotes } from "@shared/types/frontend-notes"
import "./favourite-style.css"

function Favourites({
    title,
    favNotes,
    onToggleFavourite
    }:
    {
        title: string,
        favNotes: FrontendNotes[],
        onToggleFavourite: (id: number) => {}
    }) { 

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