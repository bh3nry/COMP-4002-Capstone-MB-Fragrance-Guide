import { Router } from "express";
import { getProfile, updateProfile } from "../controllers/profileController";
import { validateProfile } from "../middleware/validateProfile";

const profileRouter = Router();

// GET, returns the current profile
profileRouter.get("/", getProfile);

// PUT, updates the profile
profileRouter.put("/", validateProfile, updateProfile);

export default profileRouter;