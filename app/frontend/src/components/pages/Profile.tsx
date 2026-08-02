import React, { useEffect, useRef } from "react"
import ProfileForm from "../commons/profile/ProfileForm"
import ScentTags from "../commons/profile/ScentTags"
import { useForm } from "../../hooks/useForm"
import "./profile.css"
import Recommendations from "../commons/profile/Location"
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react"

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Profile = (): React.JSX.Element => {
    const { userNote, profile, setProfile, selectedTags, setSelectedTags } = useForm();
    const { getToken, isSignedIn } = useAuth();
    const hasLoadedProfileRef = useRef(false);

    // only fetches profile when user is signed in
    useEffect(() => {
        if (!isSignedIn) return;

        getToken().then((token) => {
            fetch(`${BASE_URL}/api/v1/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data) {
                        hasLoadedProfileRef.current = true;
                        setProfile({ displayName: data.displayName, bio: data.bio });
                    }
                })
                .catch((error) => console.error("Failed to load profile:", error));
        });
    }, [isSignedIn]);

    return (
        <div className="profile-page">
            <h1>My Profile</h1>

            <SignedOut>
                <p className="profile-page__guest">
                    Sign in to view your profile.
                </p>
            </SignedOut>

            <SignedIn>
            <div className="profile-page__content">
                <ProfileForm profile={profile} setProfile={setProfile} userNote={userNote} />
                <Recommendations userNote={userNote} />
                <ScentTags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            </div>
            </SignedIn>
        </div>
    )
}

export default Profile;