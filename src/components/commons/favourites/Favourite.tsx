import NoteTable from "../../notes/noteList"
import type { Notes } from "../../notes/notes-data"
import "./favourite-style.css"

function Favourites({
    scents,
    updateNotes
    }:
    {
        scents: Notes[],
        updateNotes: React.Dispatch<React.SetStateAction<Notes[]>>
    }) { 

    const handleNotesFavouriteClick = (notesClicked: Notes): void => {
        updateNotes(oldNotesState => {
            return oldNotesState.map(n => {
                if(n.name === notesClicked.name) {
                    let newFavourite = !n.isFavourite;
                    return {...n, isFavourite: newFavourite};
                } else {
                    return n;
                }
            })
        });
    }

    const notesListItems = scents.map((s) => {
        return (

            <NoteTable
                notes={s}

                onSaveClick={() => {
                    handleNotesFavouriteClick(s);

                }}

                key={s.name}
            />
        )
    })
    
    return (
        <>
            <h1>Favourite Scents</h1>
            <div>
                {notesListItems}
            </div>
        </>
    );
}

export default Favourites;