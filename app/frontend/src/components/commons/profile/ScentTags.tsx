import { useEffect } from "react";
import type { ScentTagsProps, ScentTag } from "./profile-data";
import { availableTags } from "./profile-data";
import { useAuth } from "@clerk/clerk-react";
import "./ScentTags.css";

/**
 * Component for displaying and managing a user's scent personality tags.
 * Loads selected tags from the backend on mount and saves them when they change.
 * Uses Clerk auth to associate tags with the logged in user.
 * @param selectedTags - the current list of tags the user has selected
 * @param setSelectedTags - setter function to update the selected tags in the parent
 * @returns a JSX element that renders available tags and the user's selected tags
 */
function ScentTags({ selectedTags, setSelectedTags }: ScentTagsProps) {
    const { getToken, isSignedIn } = useAuth();
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // loads selected tags from the backend on mount
    useEffect(() => {
        if (!isSignedIn) return;
        getToken().then((token) => {
            fetch(`${BASE_URL}/api/v1/tags`, {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then((res) => res.json())
                .then((data: { id: number; clerkId: string; tag: string }[]) => {
                    // maps backend tag objects to ScentTag objects
                    const loadedTags: ScentTag[] = data.map((t) => ({
                        id: availableTags.find((a) => a.label === t.tag)?.id ?? 0,
                        label: t.tag
                    }));
                    setSelectedTags(loadedTags);
                })
                .catch((error) => console.error("Failed to load tags:", error));
        });
    }, [isSignedIn]);

    // saves selected tags to the backend whenever they change
    const saveTags = async (tags: ScentTag[]) => {
        if (!isSignedIn) return;
        const token = await getToken();
        fetch(`${BASE_URL}/api/v1/tags`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ tags: tags.map((t) => t.label) }),
        }).catch((error) => console.error("Failed to save tags:", error));
    };

    // adds a tag to the selected list if it is not already selected
    function handleAdd(tag: ScentTag) {
        const alreadySelected = selectedTags.find((t) => t.id === tag.id);
        if (!alreadySelected) {
            const updated = [...selectedTags, tag];
            setSelectedTags(updated);
            saveTags(updated);
        }
    }

    // removes a tag from the selected list by filtering it out
    function handleRemove(tag: ScentTag) {
        const updated = selectedTags.filter((t) => t.id !== tag.id);
        setSelectedTags(updated);
        saveTags(updated);
    }

    return (
        <section className="scent-tags">
            <h2>Scent Personality</h2>

            <p className="scent-tags__label">Select your scent tags</p>

            {/* predefined tags the user can click to add */}
            <ul className="scent-tags__available">
                {availableTags.map((tag) => (
                    <li key={tag.id}>
                        <button
                            type="button"
                            onClick={() => handleAdd(tag)}
                            className={`scent-tags__tag ${selectedTags.find((t) => t.id === tag.id) ? "scent-tags__tag--selected" : ""}`}
                        >
                            {tag.label}
                        </button>
                    </li>
                ))}
            </ul>

            <p className="scent-tags__label">Your scent personality</p>

            {/* selected tags the user can click to remove */}
            <ul className="scent-tags__selected">
                {selectedTags.map((tag) => (
                    <li key={tag.id}>
                        <button
                            type="button"
                            onClick={() => handleRemove(tag)}
                            className="scent-tags__tag scent-tags__tag--active"
                        >
                            {tag.label} ✕
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ScentTags;