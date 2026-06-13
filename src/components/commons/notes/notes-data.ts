
export type NotesTagsProps = {
    favNotes: Notes[];
    setFavNotes: (notes: Notes[]) => void;
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



