export type ProfileData = {
    displayName: string;
    bio: string;
}

export type ScentTag = {
    id: number;
    label: string;
}

export type ProfileFormProps = {
    profile: ProfileData;
    setProfile: (profile: ProfileData) => void;
}

export type ScentTagsProps = {
    selectedTags: ScentTag[];
    setSelectedTags: (tags: ScentTag[]) => void;
}

// a predefined list of scent tags users can choose from
export const availableTags: ScentTag[] = [
    { id: 1, label: "Woody" },
    { id: 2, label: "Fresh" },
    { id: 3, label: "Floral" },
    { id: 4, label: "Citrus" },
    { id: 5, label: "Aquatic" },
    { id: 6, label: "Spicy" },
    { id: 7, label: "Earthy" },
];