
export type NotesTagsProps = {
    title: string;
    favNotes: Notes[];
    onToggleFavourite: (notesId: number) => void;
}

export type FavouriteFragranceProps = {
    favFragrances: FavouriteFragrance[];
    onAddFavouriteFragrance: (fragranceName: FavouriteFragrance[]) => void;
}

export type Notes = {
    id: number;
    name: string;
    image: string;
    isFavourite: boolean;
    info: Info []
};

export type Info = {
    description: string;
    season: string;
    suggestions: string;
}

export type FavouriteFragrance = {
    name: string
}


