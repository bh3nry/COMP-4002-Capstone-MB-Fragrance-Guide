import React from "react"
import { useForm } from '../../hooks/useForm';

const Home = (): React.JSX.Element => {

    // Assume userNote is state, and setUserNote is the setter
    const { userNote, setUserNote } = useForm();

    const removeButton = (buttonIndex: number) => {
        const noteButtons = [...userNote]
        noteButtons.splice(buttonIndex, 1)
        setUserNote(noteButtons)
    }

    const getFormData = (formData: FormData): void => {
        const formCollection = String(formData.get("userNotes"))
        setUserNote((prev) => [...prev, formCollection]);
    }
    const noteMap = userNote.map((note, index) => (
        <button 
            className="note-buttons" 
            key={`${note}-${index}`}
            onClick={() => removeButton(index)}
        >
            {note}
        </button>
    ))

    return (
        <div>
            <h1>Home page</h1>
            <form action={getFormData}>
                <label htmlFor="userNotes">Notes:</label>
                <input 
                    id="userNotes" 
                    name="userNotes" 
                    type="text" 
                    placeholder="Vanilla" 
                    minLength={3}
                    required
                />
                <button>Add New Note</button>
            </form>
            {noteMap.length > 0 && <p>Click to delete notes!</p>}
            <ul>{noteMap}</ul>
        </div>
    )
}

export default Home

