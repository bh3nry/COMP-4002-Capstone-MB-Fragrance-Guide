import NoteTable from "../../notes/noteList"
import type { Notes } from "../../notes/notes-data"
import { ScentNotes } from "../../notes/notes-data"

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
            // map the array to copy it, modifying if we need to
            return oldNotesState.map(n => {
                /**
                 * If our clicked ID matches the mapped term, we return
                 * a destructuring of that object, but with the updated
                 * "favourite" property value
                 */
                if(n.name === notesClicked.name) {
                    let newFavourite = !n.isFavourite;
                    return {...n, isFavourite: newFavourite};
                } else {
                    // if not, we just return the original object for mapping.
                    return n;
                }
            })
        });
    }
    
    return (
        <form>
            <h1>Favourite Scents</h1>
            <NoteTable 
            notes={ScentNotes}
            
            onSaveClick={() => scents.map((s) => {
                handleNotesFavouriteClick(s)
            })}/>

        </form>
    );
}

export default Favourites;