import type { Notes } from '../types/notesType';
import Juniper from '../assets/notesimg/Juniper.png';
import Patchouli from '../assets/notesimg/Patchouli.png';
import Sandalwood from '../assets/notesimg/Sandalwood.png';


export const mockNotesData: Notes[] = [
    {
    id: 1,
    name: "Juniper",
    image: Juniper,
    isFavourite: true,
    info: [{
        description: "Sharp, pine-like, gin-like, aromatic, slightly peppery.",
        season: "Spring",
        suggestions: "V Good smell no.5"
    }]
    },
    {
    id: 2,
    name: "Patchouli",
    image: Patchouli,
    isFavourite: true,
    info: [{
        description: "Sweet, dark, with an earthy, woody edge, it is very popular in many blends, especially the contemporary woody floral musks.",
        season: "Winter",
        suggestions: "V Good smell no.5"
    }]
    },
    {
    id: 3,
    name: "Sandalwood",
    image: Sandalwood,
    isFavourite: false,
    info: [{        
        description: "Warm, creamy, and woody aroma known for its grounding, luxurious, and long-lasting scent profile, often featuring notes of milk, earth, and soft spices.",
        season: "Winter",
        suggestions: "V Good smell no.5"
    }]
    },
    {
    id: 4,
    name: "Bergamot",
    image: '',
    isFavourite: false,
    info: [{        
        description: "A radiant citrus note with a refined blend of sweetness and gentle bitterness, accented by a faint floral elegance that feels both fresh and sophisticated.",
        season: "Spring",
        suggestions: ""
    }]
    },
    {
    id: 5,
    name: "Lemon",
    image: '',
    isFavourite: false,
    info: [{        
        description: "Crisp and invigorating, lemon delivers a sharp burst of zesty brightness with a clean, sparkling character that instantly energizes.",
        season: "Spring",
        suggestions: ""
    }]
    },
    {
    id: 6,
    name: "Grapefruit",
    image: '',
    isFavourite: false,
    info: [{        
        description: "Juicy and vibrant, grapefruit combines tart citrus freshness with a subtle bitter edge, creating a lively and uplifting sparkle.",
        season: "Summer",
        suggestions: ""
    }]
    },
    {
    id: 7,
    name: "Pineapple",
    image: '',
    isFavourite: false,
    info: [{        
        description: "Lush and tropical, pineapple brings a juicy sweetness with a tangy twist, adding a playful, sun-soaked vibrance.",
        season: "Summer",
        suggestions: ""
    }]
    },
    {
    id: 8,
    name: "Sea Water",
    image: '',
    isFavourite: false,
    info: [{        
        description: "Light and breezy, this note captures the essence of ocean air—fresh, slightly salty, and airy, like a cool wind rolling over waves.",
        season: "Summer",
        suggestions: ""
    }]
    },
    {
    id: 9,
    name: "Cinnamon",
    image: '',
    isFavourite: false,
    info: [{         
        description: "Warm and enveloping, cinnamon offers a soft, spicy sweetness with a hint of dryness, adding depth and a comforting glow.",
        season: "Fall",
        suggestions: ""
    }]
    },
    {
    id: 10,
    name: "Tonka Bean",
    image: '',
    isFavourite: false,
    info: [{        
        description: "Rich and velvety, tonka bean exudes a creamy sweetness with nuances of vanilla, almond, and soft caramel, leaving a smooth and sensual finish.",
        season: "Fall",
        suggestions: ""
    }]
    },
];
