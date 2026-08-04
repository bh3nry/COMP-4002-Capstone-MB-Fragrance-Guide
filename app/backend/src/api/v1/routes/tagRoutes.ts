import { Router } from "express";
import { getTags, updateTags } from "../controllers/tagController";

const tagRouter = Router();

// GET, returns all tags for the logged in user
tagRouter.get("/", getTags);

// PUT, updates tags for the logged in user
tagRouter.put("/", updateTags);

export default tagRouter;