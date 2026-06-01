import React, { useState, useEffect } from "react"
import ProfileForm from "../commons/profile/ProfileForm"
import ScentTags from "../commons/profile/ScentTags"
import type { ProfileData, ScentTag } from "../commons/profile/profile-data"

const Profile = (): React.JSX.Element => {
    const [profile, setProfile] = useState<ProfileData>(() => {
        const saved = localStorage.getItem("profile");
        return saved ? JSON.parse(saved) : { displayName: "", bio: "" };
    });

    // tags stay as regular state and reset on refresh
    const [selectedTags, setSelectedTags] = useState<ScentTag[]>([]);

    // saves only profile to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("profile", JSON.stringify(profile));
    }, [profile]);

    return (
        <div>
            <h1>My Profile</h1>
            <ProfileForm profile={profile} setProfile={setProfile} />
            <ScentTags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        </div>
    )
}

export default Profile;