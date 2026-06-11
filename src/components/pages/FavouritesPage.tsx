import { useState } from "react";
import { useForm } from "../../hooks/useForm"
import FragranceForm from "../commons/notes/fragranceForm";
import Favourites from "../commons/favourites/Favourite";

/**
 * Component for the Favourites page, which includes a form for users to submit their favourite fragrance and a list of their favourite notes.
 * @params scents: an array of Notes objects representing the user's favourite notes
 * @params updateNotes: a function to update the user's favourite notes
 * @return a JSX element that renders the FragranceForm and Favourites components
 */
const FavouritesPage = (): React.JSX.Element => {
    const [userFragrance, setUserFragrance] = useState<string>("");
    const { favNotes, setFavNotes } = useForm();

    return (
        <div>
            <FragranceForm
                userFragrance={userFragrance}
                setUserFragrance={setUserFragrance}
            />

            <Favourites
                favNotes={favNotes}
                setFavNotes={setFavNotes}
            />
        </div>
    );
}

export default FavouritesPage;