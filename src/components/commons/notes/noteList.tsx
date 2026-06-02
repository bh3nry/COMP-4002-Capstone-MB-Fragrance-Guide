import type { Notes } from "./notes-data";
import FavIcon from "../../../assets/heart-icon-favourite";
import RemoveFavIcon from "../../../assets/heart-icon-unfavourite";
import "./notes-styles.css";

/**
 * Component for displaying fragrance notes in a list format
 * @params notes: an object containing the name, description, and suggestions for a fragrance note
 * @params onSaveClick: a function that is called when the user clicks the "save" button for a note
 * @returns: a JSX element that renders the note's name, description, and suggestions
 */
function NoteDisplay({
    notes,
    onSaveClick
}: {
    notes: Notes,
    onSaveClick: () => void
}) {
    return (
        <>
            <ul className="notes-unorderedlist">
                <li className="note-lists">
                    <article className="notes-card">
                        <button className="button-notes" onClick={onSaveClick}>
                            {notes.isFavourite ? <FavIcon /> : <RemoveFavIcon />}
                        </button>
                        <img
                            src={notes.image}
                            alt={notes.name}
                        />
                        <h3 className="note-name">
                            {notes.name}
                        </h3>
                        <div className="description">
                            <p>
                                {(
                                    notes.info.map((d) => d.description)
                                )}
                            </p>
                            <details className="dropdown">
                                <summary>Fragrance Suggestions</summary>
                                <ul className="menu dropdown-content">
                                    <li>
                                        {(
                                            notes.info.map((d) => d.suggestions)
                                        )}
                                    </li>
                                </ul>
                            </details>
                        </div>
                    </article>
                </li>
            </ul>
        </>
    );
}

export default NoteDisplay;