export type SearchBarProps = {
    onSearch?: (query: string) => void;
    placeholder?: string;
}

export type FragranceResult = {
    id: number;
    title: string;
    brand: string;
    notes: string;
    price: string;
}

export const searchData: FragranceResult[] = [
    {   id: 1,
        title: "Great Amazing Smell Wow",
        brand: "David's Object Model",
        notes: "Cardamom, Violet, Sandalwood",
        price: "$99.99" }
];

export default searchData;
