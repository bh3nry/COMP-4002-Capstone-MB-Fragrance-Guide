import React, { useState } from "react";
import type { ProfileFormProps } from "./profile-data";
import "./ProfileForm.css";

/**
 * Component for displaying and editing a user's profile information.
 * @param profile - the current profile data object containing displayName and bio
 * @param setProfile - setter function to update the profile state in the parent
 * @param userNote - list of scent notes added from the home page via shared context
 * @returns a JSX element that renders a profile card with editable username and bio
 */
const ProfileForm = ({ profile, setProfile, userNote }: ProfileFormProps): React.JSX.Element => {

    const [localDisplayName, setLocalDisplayName] = useState("");
    const [localBio, setLocalBio] = useState("");
    const [saved, setSaved] = useState(false);

    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const handleSave = () => {
        setProfile({ displayName: localDisplayName, bio: localBio });
        fetch(`${BASE_URL}/api/v1/profile`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ displayName: localDisplayName, bio: localBio }),
        }).catch((error) => console.error("Failed to save profile:", error));
        setSaved(true);
        setLocalDisplayName("");
        setLocalBio("");
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <section className="profile-card">

            <div className="profile-card__avatar">
                <div className="profile-card__avatar-placeholder">
                    <span className="profile-card__avatar-icon">🐱</span>
                </div>
            </div>

            <h2 className="profile-card__name">
                {profile.displayName || "Your Name"}
            </h2>
            <p className="profile-card__bio">
                {profile.bio || "Your bio will appear here."}
            </p>

            <div className="profile-card__fields">
                <div className="profile-card__row">
                    <span className="profile-card__label">Username</span>
                    <input
                        type="text"
                        value={localDisplayName}
                        onChange={(e) => setLocalDisplayName(e.target.value)}
                        placeholder="Enter your username"
                        className="profile-card__input"
                    />
                </div>

                <div className="profile-card__row">
                    <span className="profile-card__label">Bio</span>
                    <textarea
                        value={localBio}
                        onChange={(e) => setLocalBio(e.target.value)}
                        placeholder="Tell us about yourself"
                        className="profile-card__textarea"
                    />
                </div>
            </div>

            <button
                type="button"
                onClick={handleSave}
                className="profile-card__save"
            >
                {saved ? "Saved!" : "Save Profile"}
            </button>

            {userNote.length > 0 && (
                <div className="profile-card__notes">
                    <h3>My Scent Notes</h3>
                    <ul>
                        {userNote.map((note, index) => (
                            <li key={`${note}-${index}`}>{note}</li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}

export default ProfileForm;