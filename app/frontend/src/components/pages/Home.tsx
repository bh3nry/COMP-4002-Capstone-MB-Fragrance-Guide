import React, { useState } from "react"
import './home.css'
import ProductCard from "../commons/productcard/ProductCard";
import { useForm } from '../../hooks/useForm';
import useReco  from "../../hooks/useReco";
import SignInGateKeeper from "../commons/auth/SignInGateKeeper";

const heroHeaderOptions = [
    "Find your signature scent.",
    "From notes to knowing, discover fragrances made for you.",
    "Describe the scent. We'll do the smelling for you.",
    "Your nose knows. Let's find the bottle.",
    "Enter the notes. Discover the fragrance.",
    "Scent-matched, not guesswork.",
    "The fragrance finder for people who know what they like.",
    "Turn scent notes into your next favorite cologne.",
    "Stop sampling blind. Start smelling smart."
]

const Home = (): React.JSX.Element => {

    const [heroTextGenerator] = useState(() => {
        const index = Math.floor(
            heroHeaderOptions.length 
            * Math.random())
            return heroHeaderOptions[index]
    })
    
    const { userNote, setUserNote, setScentCount, outOfTries } = useForm();
    const { recommendations, isPending, error } = useReco(userNote);

    const useFragrances = recommendations.length > 0 && recommendations.map(
        (item) =>
            <div className={'reco-list'} key={item.id}>
                <ProductCard
                    title={item.Name}
                    notes={item.Notes.join(' ')}
                    price={item.id}
                />
            </div>)
    
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

    return outOfTries ?
        <SignInGateKeeper />
        : (
        <div className="homepage-wrapper">
            <h1>{heroTextGenerator}</h1>
            <form action={getFormData}>
                <label htmlFor={`${id} -userNotes`}></label>
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
                <button 
                    onClick={() => setScentCount(prev => prev + 1)}
                    className="new-note-btn">
                    Add New Note
                </button>
            </form>
            <ul>{noteMap}</ul>
            {noteMap.length > 0 && <p>Click twice to delete notes!</p>}
            {isPending && <p>Loading recommendations…</p>}
            {error && <p>Could not load recommendations.</p>}
            <ul>{useFragrances}</ul>
        </div>
    )
}

export default Home