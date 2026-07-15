import express, {Router} from "express";
import * as noteController from "../controllers/noteController";

const router: Router = express.Router();

router.get("/notes", noteController.getAllNotes)

router.get("/notes/:id", noteController.getNoteById)

export default router;