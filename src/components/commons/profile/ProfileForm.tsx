import type { ProfileFormProps } from "./profile-data";

/**
 * Component for displaying and editing a user's profile information.
 * @param profile - the current profile data object containing displayName and bio
 * @param setProfile - setter function to update the profile state in the parent
 * @returns a JSX element that renders a profile form with a live preview
 */
function ProfileForm({ profile, setProfile }: ProfileFormProps) {
    return (
        <section className="profile-form">
            <h2>Edit Profile</h2>

            <form action="#">
                <label htmlFor="displayName">Display Name</label>
                <input
                    id="displayName"
                    type="text"
                    value={profile.displayName}
                    onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                    placeholder="Enter your display name"
                    className="profile-input"
                />
                <br></br>
                <label htmlFor="bio">Bio</label>
                <textarea
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    placeholder="Tell us about yourself"
                    className="profile-textarea"
                />
            </form>
            
            {/* Live updates a preview for the profile as info is edited */}
            <div className="profile-preview">
                <h3>Preview</h3>
                <p className="preview-name">{profile.displayName || "Your Name"}</p>
                <p className="preview-bio">{profile.bio || "Your bio will appear here."}</p>
            </div>
        </section>
    );
}

export default ProfileForm;