import { useFavouriteNotes } from "../../hooks/useFavouriteNotes";
import Favourites from "../commons/favourites/Favourite";

const NotesPage = (): React.JSX.Element => {
    const { favNotes, toggleFavourite } = useFavouriteNotes();

    return (
        <div>
            <Favourites
                title="List of Notes"
                favNotes={favNotes}
                onToggleFavourite={toggleFavourite}
            />
        </div>
    );
}

export default NotesPage;