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
            <div className="profile-card-avatar">
                <div className="profile-card-avatar-placeholder">
                    <span className="profile-card-avatar-icon">🐱</span>
                </div>
            </div>

            {/* display name shown above the fields */}
            <h2 className="profile-card-name">
                {profile.displayName || "Your Name"}
            </h2>
            <p className="profile-card-bio">
                {profile.bio || "Your bio will appear here."}
            </p>

            {/* edit fields */}
            <div className="profile-card-fields">
                <div className="profile-card-row">
                    <span className="profile-card-label">Username</span>
                    <input
                        type="text"
                        value={profile.displayName}
                        onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                        placeholder="Enter your username"
                        className="profile-card-input"
                    />
                </div>

                <div className="profile-card-row">
                    <span className="profile-card-label">Bio</span>
                    <textarea
                        value={profile.bio}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                        placeholder="Tell us about yourself"
                        className="profile-card-textarea"
                    />
                </div>
            </div>
        </section>
    );
}

export default ProfileForm;