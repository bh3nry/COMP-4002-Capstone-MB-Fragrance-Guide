import type { Request, Response } from "express";
import { fetchAllLocations, fetchLocationById } from "../services/locationService";

// GET /locations
export const getAllLocations = async (req: Request, res: Response): Promise<void> => {
    try {
        const locations = await fetchAllLocations();
        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch locations" });
    }
};

// GET /locations/:id
export const getLocationById = async (req: Request, res: Response): Promise<void> => {
    try {
        const idParam = req.params.id;
        if (typeof idParam !== "string") {
            res.status(400).json({ error: "Invalid id" });
            return;
        }
        const id = parseInt(idParam, 10);
        if (isNaN(id)) {
            res.status(400).json({ error: "Invalid id" });
            return;
        }
        const location = await fetchLocationById(id);
        if (!location) {
            res.status(404).json({ error: "Location not found" });
            return;
        }
        res.status(200).json(location);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch location" });
    }
};