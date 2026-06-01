import type { ScentTagsProps, ScentTag } from "./profile-data";
import { availableTags } from "./profile-data";
import "./ScentTags.css";

/**
 * Component for displaying and managing a user's scent personality tags.
 * @param selectedTags - the current list of tags the user has selected
 * @param setSelectedTags - setter function to update the selected tags in the parent
 * @returns a JSX element that renders available tags and the user's selected tags
 */
function ScentTags({ selectedTags, setSelectedTags }: ScentTagsProps) {

    // adds a tag to the selected list if it is not already selected
    function handleAdd(tag: ScentTag) {
        const alreadySelected = selectedTags.find((t) => t.id === tag.id);
        if (!alreadySelected) {
            setSelectedTags([...selectedTags, tag]);
        }
    }

    // removes a tag from the selected list by filtering it out
    function handleRemove(tag: ScentTag) {
        setSelectedTags(selectedTags.filter((t) => t.id !== tag.id));
    }

    return (
        <section className="scent-tags">
            <h2>Scent Personality</h2>

            <p className="scent-tags-label">Select your scent tags</p>

            {/* predefined tags the user can click to add */}
            <ul className="scent-tags-available">
                {availableTags.map((tag) => (
                    <li key={tag.id}>
                        <button
                            type="button"
                            onClick={() => handleAdd(tag)}
                            className={`scent-tags-tag ${selectedTags.find((t) => t.id === tag.id) ? "scent-tags-tag--selected" : ""}`}
                        >
                            {tag.label}
                        </button>
                    </li>
                ))}
            </ul>

            <p className="scent-tags-label">Your scent personality</p>

            {/* selected tags the user can click to remove */}
            <ul className="scent-tags-selected">
                {selectedTags.map((tag) => (
                    <li key={tag.id}>
                        <button
                            type="button"
                            onClick={() => handleRemove(tag)}
                            className="scent-tags-tag scent-tags-tag--active"
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