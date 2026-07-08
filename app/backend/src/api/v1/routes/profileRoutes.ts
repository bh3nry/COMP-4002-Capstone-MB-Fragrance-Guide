import { Router } from "express";
import { getProfile, updateProfile } from "../controllers/profileController";

const profileRouter = Router();

// GET, returns the current profile
profileRouter.get("/", getProfile);

// PUT, updates the profile
profileRouter.put("/", updateProfile);

export default profileRouter;