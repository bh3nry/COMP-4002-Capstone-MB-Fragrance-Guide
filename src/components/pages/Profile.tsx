import React from "react"
import ProfileForm from "../commons/profile/ProfileForm"
import ScentTags from "../commons/profile/ScentTags"
import { useForm } from "../../hooks/useForm"
import "./Profile.css"

const Profile = (): React.JSX.Element => {
    const { profile, setProfile, selectedTags, setSelectedTags } = useForm();

    return (
        <div className="profile-page">
            <h1>My Profile</h1>
            <div className="profile-page-content">
                <ProfileForm profile={profile} setProfile={setProfile} />
                <ScentTags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            </div>
        </div>
    )
}

export default Profile;