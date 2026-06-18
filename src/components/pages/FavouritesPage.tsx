import { useCallback } from "react";
import { useFavouriteNotes } from "../../hooks/useFavouriteNotes";
import { useForm } from "../../hooks/useForm";
import type {Notes} from "../../types/notesType";
import FragranceForm from "../commons/notes/fragranceForm";
import Favourites from "../commons/favourites/Favourite";

/**
 * Component for the Favourites page, which includes a form for users to submit their favourite fragrance and a list of their favourite notes.
 * @params scents: an array of Notes objects representing the user's favourite notes
 * @params updateNotes: a function to update the user's favourite notes
 * @return a JSX element that renders the FragranceForm and Favourites components
 */
const FavouritesPage = (): React.JSX.Element => {
    
    const filterFav = useCallback((note: Notes) => note.isFavourite, []);
    
    const { favFragrances, setFavFragrances } = useForm();
    const { favNotes, toggleFavourite } = useFavouriteNotes(filterFav);

    return (
        <div>
            <FragranceForm
                favFragrances={favFragrances}
                onAddFavouriteFragrance={setFavFragrances}
            />

            <Favourites
                title="Favourite Scents"
                favNotes={favNotes}
                onToggleFavourite={toggleFavourite}
            />
        </div>
    );
}

export default FavouritesPage;