import type { Notes } from "./notes-data";
import "./notes-styles.css";

type FragNotesProps = {
    notes: Notes;
    pics: string;
};

/* Component for displaying fragrance notes in a list format
    @params: 
    notes: an object containing the name, description, and suggestions
    for a fragrance note
    pics: a string representing the path to an image associated with the note
    @returns: a JSX element that renders the note's name, description, and suggestions
*/
function NoteTable({
    notes,
    pics
}: FragNotesProps) {
    const name = notes.name;
    const description = notes.description;
    const suggestions = notes.suggestions;

    return (
        <article className="notes-card">
        <img 
            src={pics} 
            alt={name} 
        />
        <h3 className="note-name">{name}</h3>
        <div className="description">
            <p>{description}</p>
        
            <details className="dropdown">
                <summary>Fragrance Suggestions</summary>
                <ul className="menu dropdown-content">
                    <li>{suggestions}</li>
                </ul>
            </details>
        </div>
        </article>
    );
}

export default NoteTable;