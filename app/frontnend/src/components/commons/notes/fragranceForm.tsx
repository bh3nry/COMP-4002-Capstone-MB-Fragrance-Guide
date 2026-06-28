import { useState, type ChangeEvent, type FormEvent } from "react";
import type { FavouriteFragranceProps } from "../../../types/notesType";

function FragranceForm({ favFragrances, onAddFavouriteFragrance }: FavouriteFragranceProps) {
    const [fragranceName, setFragranceName] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedName = fragranceName.trim();
        if (!trimmedName) return;

        onAddFavouriteFragrance([ { name: trimmedName } ]);
        setFragranceName("");
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFragranceName(event.target.value);
    };

    return (
        <section>
            <h1>Favourite Fragrance Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Fragrance:
                    <input type="text" value={fragranceName} onChange={handleChange} />
                </label>
            </form>

            <div>
                <p>
                    Current Fragrance: {favFragrances.length > 0 ? favFragrances[favFragrances.length - 1].name : "(none)"}
                </p>
            </div>
        </section>
    );
}

export default FragranceForm;


