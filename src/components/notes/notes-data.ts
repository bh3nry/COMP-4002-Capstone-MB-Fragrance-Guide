import Juniper from '../../assets/notes/Juniper.webp'
import Patchouli from '../../assets/notes/Patchouli.webp'
import Sandalwood from '../../assets/notes/Sandalwood.webp'

export type Notes = {
    name: string;
    image: string;
    isFavourite: boolean;
    info: Info []
};

export type Info = {
    description: string;
    suggestions: string;
}
export const ScentNotes: Notes[] = [
    {
    name: "Juniper",
    image: Juniper,
    isFavourite: false,
    info: [{
        description: "Sharp, pine-like, gin-like, aromatic, slightly peppery.",
        suggestions: "V Good smell no.5"
    }]
    },
    {
    name: "Patchouli",
    image: Patchouli,
    isFavourite: false,
    info: [{
        description: "Sweet, dark, with an earthy, woody edge, it is very popular in many blends, especially the contemporary woody floral musks.",
        suggestions: "V Good smell no.5"
    }]
    },
    {
    name: "Sandalwood",
    image: Sandalwood,
    isFavourite: false,
    info: [{
        description: "Warm, creamy, and woody aroma known for its grounding, luxurious, and long-lasting scent profile, often featuring notes of milk, earth, and soft spices.",
        suggestions: "V Good smell no.5"
    }]
    }];


