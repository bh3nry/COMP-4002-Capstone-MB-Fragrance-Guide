import type { Notes } from "./notes-data";

type FragNotesProps = {
    notes: Notes;
    pics: string;
};

function NoteTable({
    notes,
    pics
}: FragNotesProps) {
    const name = notes.name;
    const description = notes.description;
    const suggestions = notes.suggestions;

    return (
        <ul>
            <li>
                <div><img src={pics} alt={name} /></div>
                <div>{name}</div>
                <p>{description}</p>
                <details className="dropdown">
                    <summary>Fragrance Suggestions</summary>
                    <ul>
                        <li>{suggestions}</li>
                    </ul>
                </details>
            </li>
        </ul>
    )
}

export default NoteTable;