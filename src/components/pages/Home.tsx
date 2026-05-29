import React, { useState } from "react"

const Home = (): React.JSX.Element => {
    
    const [noteFromUser, setNoteFromUser] = useState<string[]>([]);

    const getFormData = (formData: FormData): void => {
        const formCollection = String(formData.get("userNotes"))
        setNoteFromUser(x => [...x, formCollection])
    }

    const noteMap = noteFromUser.map((note, index) => (
        <li key={index}>
            {note ? String(note) : ""}
        </li>
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
            <ul> {noteMap} </ul>
        </div>
    )
}

export default Home