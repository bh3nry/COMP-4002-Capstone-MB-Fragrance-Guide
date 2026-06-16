import React from "react"
import ProfileForm from "../commons/profile/ProfileForm"
import ScentTags from "../commons/profile/ScentTags"
import { useForm } from "../../hooks/useForm"
import "./profile.css"
import Recommendations from "../commons/profile/Location"

const Profile = (): React.JSX.Element => {
    const { userNote, profile, setProfile, selectedTags, setSelectedTags } = useForm();

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
