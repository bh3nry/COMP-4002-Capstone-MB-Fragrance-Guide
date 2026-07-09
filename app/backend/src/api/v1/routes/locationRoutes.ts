import { Router } from "express";
import { getAllLocations, getLocationById } from "../controllers/locationController";

const router = Router();

// GET, returns all sale locations
router.get("/", getAllLocations);

// GET, returns a single location by id
router.get("/:id", getLocationById);

export default router;