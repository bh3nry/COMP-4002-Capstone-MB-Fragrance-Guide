export type SearchBarProps = {
    onSearch?: (query: string) => void;
    placeholder?: string;
}

export const searchData = {
    results: [
        {
            id: 1,
            title: "Great Amazing Smell Wow",
            brand: "David's Object Model",
            notes: "Cardamom, Violet, Sandalwood",
            price: "$99.99"
        }
    ],
}

export default searchData;
