import { useState, type Dispatch, type FormEvent, type SetStateAction } from "react";


/**
 * Component for a form that allows users to update their favourite fragrance. 
 * It maintains a list of submitted fragrances and displays them below the form.
 * @params userFragrance: the current value of the fragrance input field
 * @params setUserFragrance: a function to update the userFragrance state
 * @return a JSX element that renders the form and the list of submitted fragrances
 */
function FragranceForm({
    userFragrance,
    setUserFragrance
}: {
    userFragrance: string,
    setUserFragrance: Dispatch<SetStateAction<string>>
}) {
    const [submittedFragrances, setSubmittedFragrances] = useState<string[]>([]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedFragrance = userFragrance.trim();
        if (!trimmedFragrance) {
            return;
        }

        setSubmittedFragrances((current) => [...current, trimmedFragrance]);
        setUserFragrance("");
    };

    return (
        <section>
            <h1>Favourite Fragrance Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Fragrance:
                    <input
                        type="text"
                        value={userFragrance}
                        onChange={(e) => setUserFragrance(e.target.value)}
                    />
                </label>
            </form>

            <div>
                <p>Current Fragrance: {userFragrance || "(none)"}</p>
                {submittedFragrances.map((fragrance, index) => (
                    <p key={index}>{fragrance}</p>
                ))}
            </div>
        </section>
    );
}

export default FragranceForm;


