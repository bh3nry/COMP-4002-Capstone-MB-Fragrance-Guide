import express, {Router} from "express";
import * as noteController from "../controllers/noteController.js";

const router: Router = express.Router();

router.get("/", noteController.getAllNotes)

router.get("/:id", noteController.getNoteById)

export default router;