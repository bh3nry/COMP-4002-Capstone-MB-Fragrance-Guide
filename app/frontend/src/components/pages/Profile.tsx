import React, { useEffect } from "react"
import ProfileForm from "../commons/profile/ProfileForm"
import ScentTags from "../commons/profile/ScentTags"
import { useForm } from "../../hooks/useForm"
import "./profile.css"
import Recommendations from "../commons/profile/Location"

const BASE_URL = "http://localhost:3000";

const Profile = (): React.JSX.Element => {
    const { userNote, profile, setProfile, selectedTags, setSelectedTags } = useForm();

    useEffect(() => {
        fetch(`${BASE_URL}/profile`)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setProfile({ displayName: data.displayName, bio: data.bio });
                }
            })
            .catch((error) => console.error("Failed to load profile:", error));
    }, []);

    useEffect(() => {
        if (!profile.displayName && !profile.bio) return;
        fetch(`${BASE_URL}/profile`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(profile),
        }).catch((error) => console.error("Failed to save profile:", error));
    }, [profile]);

    return (
        <div className="profile-page">
            <h1>My Profile</h1>
            <div className="profile-page__content">
                <ProfileForm profile={profile} setProfile={setProfile} userNote={userNote} />
                <Recommendations userNote={userNote} />
                <ScentTags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            </div>
        </div>
    )
}

export default Profile;