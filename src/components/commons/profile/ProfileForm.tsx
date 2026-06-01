import React from "react";
import type { ProfileFormProps } from "./profile-data";
import "./ProfileForm.css";

/**
 * Component for displaying and editing a user's profile information.
 * @param profile - the current profile data object containing displayName and bio
 * @param setProfile - setter function to update the profile state in the parent
 * @returns a JSX element that renders a profile card with editable username and bio
 */
const ProfileForm = ({ profile, setProfile }: ProfileFormProps): React.JSX.Element => {
    return (
        <section className="profile-card">

            {/* avatar placeholder */}
            <div className="profile-card__avatar">
                <div className="profile-card__avatar-placeholder">
                    <span className="profile-card__avatar-icon">🐱</span>
                </div>
            </div>

            {/* display name shown above the fields */}
            <h2 className="profile-card__name">
                {profile.displayName || "Your Name"}
            </h2>
            <p className="profile-card__bio">
                {profile.bio || "Your bio will appear here."}
            </p>

            {/* edit fields */}
            <div className="profile-card__fields">
                <div className="profile-card__row">
                    <span className="profile-card__label">Username</span>
                    <input
                        type="text"
                        value={profile.displayName}
                        onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                        placeholder="Enter your username"
                        className="profile-card__input"
                    />
                </div>

                <div className="profile-card__row">
                    <span className="profile-card__label">Bio</span>
                    <textarea
                        value={profile.bio}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                        placeholder="Tell us about yourself"
                        className="profile-card__textarea"
                    />
                </div>
            </div>
        </section>
    );
}

export default ProfileForm;