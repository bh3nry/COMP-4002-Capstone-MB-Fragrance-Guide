import type { Request, Response } from "express";
import { fetchProfile, saveProfile } from "../services/profileService";
import { getAuth } from "@clerk/express";

// GET /profile
export const getProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const profile = await fetchProfile(userId);
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch profile" });
    }
};

// PUT /profile
export const updateProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const { displayName, bio } = req.body as { displayName: string; bio: string };
        const profile = await saveProfile(userId, displayName, bio);
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: "Failed to update profile" });
    }
};