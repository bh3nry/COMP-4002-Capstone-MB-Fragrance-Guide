import type { Request, Response } from "express";
import { fetchTags, saveTags } from "../services/tagService";
import { getAuth } from "@clerk/express";

// GET /tags
export const getTags = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const tags = await fetchTags(userId);
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch tags" });
    }
};

// PUT /tags
export const updateTags = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const { tags } = req.body as { tags: string[] };
        if (!tags || !Array.isArray(tags)) {
            res.status(400).json({ error: "Tags must be an array of strings" });
            return;
        }
        const saved = await saveTags(userId, tags);
        res.status(200).json(saved);
    } catch (error) {
        res.status(500).json({ error: "Failed to update tags" });
    }
};