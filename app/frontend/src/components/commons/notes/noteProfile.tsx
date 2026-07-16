import type { FrontendNotes as Notes } from '@shared/types/frontend-notes';

function NoteProfile({
    notes
}: {
    notes: Notes
}) {
    return (
        <>
            <div>
                <h1 className="notes-header">
                    {notes.name}
                </h1>
                <p>
                    {notes.description}
                </p>
            </div>
            <div>
                <h3>
                    Fragrance Suggestions
                </h3>
                <ul>
                    <li>
                        test
                    </li>
                </ul>
            </div>
        </>
    )
};

export default NoteProfile;