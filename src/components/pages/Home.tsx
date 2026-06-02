import React from "react"
import './home.css'
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
        <div className="homepage-wrapper">
            <h1>Make your own <br />scent creation</h1>
            <form action={getFormData}>
                <label htmlFor="userNotes"></label>
                <div className="notebox">
                    <input 
                        id="userNotes" 
                        name="userNotes" 
                        type="text" 
                        placeholder="notes" 
                        minLength={3}
                        required
                    />
                </div>
                <button className="new-note-btn">Add New Note</button>
            </form>
            <ul>{noteMap}</ul>
            {noteMap.length > 0 && <p>Click to delete notes!</p>}
        </div>
    )
}

export default Home

