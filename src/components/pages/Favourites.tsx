<<<<<<< HEAD
const Favourites = () => {
    return (
        <div>
            <p>Favourites</p>
        </div>
    )
}

export default Favourites
=======
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Notes } from "../notes/notes-data";
import FragranceForm from "../notes/fragranceForm";
import Favourites from "../commons/favourites/Favourite";

/**
 * Component for the Favourites page, which includes a form for users to submit their favourite fragrance and a list of their favourite notes.
 * @params scents: an array of Notes objects representing the user's favourite notes
 * @params updateNotes: a function to update the user's favourite notes
 * @return a JSX element that renders the FragranceForm and Favourites components
 */
function FavouritesPage({
    scents,
    updateNotes
}: {
    scents: Notes[];
    updateNotes: Dispatch<SetStateAction<Notes[]>>;
}) {
    const [userFragrance, setUserFragrance] = useState<string>("");

    return (
        <>
            <FragranceForm
                userFragrance={userFragrance}
                setUserFragrance={setUserFragrance}
            />

            <Favourites
                scents={scents}
                updateNotes={updateNotes}
            />
        </>
    );
}

export default FavouritesPage;
>>>>>>> 23605d7 (feat: implemented form that updates the status of your current favourite fragrance.)
