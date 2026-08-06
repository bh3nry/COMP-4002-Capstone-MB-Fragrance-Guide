import type { FrontendNotes as Notes } from '@shared/types/frontend-notes';
import { Link } from "react-router-dom";
import "./notes-styles.css";

/**
 * Component for displaying fragrance notes in a list format
 * @params notes: an object containing the name, description, and suggestions for a fragrance note
 * @params onSaveClick: a function that is called when the user clicks the "save" button for a note
 * @returns: a JSX element that renders the note's name, description, and suggestions
 */
function NoteDisplay({
    notes,
}: {
    notes: Notes,
    onSaveClick?: () => void
}) {
    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        onSaveClick?.();
    };

    return (
        <>
            <Link to={`/notes/${notes.id}`} className="notes-card">
                <button
                    type="button"
                    className="button-notes"
                    onClick={handleButtonClick}
                >
                    {notes.isFavourite ? <FavIcon /> : <RemoveFavIcon />}
                </button>
                <h3 className="note-name">
                    {notes.name}
                </h3> 
                <div className="description">
                    <p>
                        {notes.description}
                    </p>
                    {/* <details className="dropdown">
                        <summary>Fragrance Suggestions</summary>
                        <ul className="menu dropdown-content">
                            <li>
                                {(
                                    notes.info.map((d) => d.suggestions)
                                )}
                            </li>
                        </ul>
                    </details> */}
                </div>
            </Link>
        </>
    );
}

export default NoteDisplay;