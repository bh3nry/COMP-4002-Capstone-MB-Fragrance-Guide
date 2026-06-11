import React from "react"
import './home.css'
import { useForm } from '../../hooks/useForm';
import { useReco } from "../../hooks/useReco";

const Home = (): React.JSX.Element => {

    // Assume userNote is state, and setUserNote is the setter
    const { userNote, setUserNote } = useForm();
    const { recommendations } = useReco(userNote);

    const useFragrances = recommendations.map(
        (item) => 
        <li className={"reco-list"}>
            {item.name}
        </li>)
    
    // A11Y: Generates a unique id if we were to extend this form
    const id = React.useId()

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
            onDoubleClick={() => removeButton(index)}
        >
            {note}
        </button>
    ))
    return (
        <div className="homepage-wrapper">
            <h1>Make your own <br />scent creation</h1>
            <form action={getFormData}>
                <label htmlFor={id + "-userNotes"}></label>
                <div className="notebox">
                    <input 
                        id={id + "-userNotes"}
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
            {noteMap.length > 0 && <p>Click twice to delete notes!</p>}
            <ul>{useFragrances}</ul>
        </div>
    )
}

export default Home