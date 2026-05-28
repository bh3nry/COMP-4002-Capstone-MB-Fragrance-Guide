import type { Notes } from "./notes-data";
import "./notes-styles.css";

/* Component for displaying fragrance notes in a list format
    @params: 
    notes: an object containing the name, description, and suggestions
    for a fragrance note
    @returns: a JSX element that renders the note's name, description, and suggestions
*/
function NoteTable({
    notes
}: {notes: Notes[]}) {

    return (
        <ul className="notes-unorderedlist">
            {notes.map((n) => (
            <li className="note-lists">
                <article className="notes-card">
                    <img 
                        src={n.image} 
                        alt={n.name} 
                    />
                    <h3 className="note-name">
                        {n.name}
                    </h3>
                    <div className="description">
                        <p>
                        {(
                            n.info.map((d) => d.description)
                        )}
                        </p>
                        <details className="dropdown">
                            <summary>Fragrance Suggestions</summary>
                            <ul className="menu dropdown-content">
                                <li>
                                    {(
                                        n.info.map((d) => d.suggestions)
                                    )}
                                </li>
                            </ul>
                        </details>
                    </div>
                </article>
            </li>
            ))}
        </ul>
    );
}

export default NoteTable;