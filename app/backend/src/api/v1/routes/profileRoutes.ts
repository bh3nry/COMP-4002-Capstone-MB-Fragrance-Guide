import { Router } from "express";
import { getProfile, updateProfile } from "../controllers/profileController";

const router = Router();

// GET, returns the current profile
router.get("/", getProfile);

// PUT, updates the profile
router.put("/", updateProfile);

export default router;