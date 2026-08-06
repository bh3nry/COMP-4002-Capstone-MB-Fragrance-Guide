import { Router } from "express";
import { getAllLocations, getLocationById } from "../controllers/locationController.js";
// import { validateLocation } from "../middleware/validateLocation.js";

const router = Router();

// GET, returns all sale locations
router.get("/", getAllLocations);

// GET, returns a single location by id
router.get("/:id", getLocationById);

export default router;