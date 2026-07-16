import type { Request, Response } from "express";
import { fetchProfile, saveProfile } from "../services/profileService";

// GET /profile
export const getProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const profile = await fetchProfile();
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch profile" });
    }
};

// PUT /profile
export const updateProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const { displayName, bio } = req.body as { displayName: string; bio: string };
        const profile = await saveProfile(displayName, bio);
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: "Failed to update profile" });
    }
};