import express, {Router} from "express";
import { findOrCreateUser } from "../middleware/findOrCreateUser.ts";
import * as noteController from "../controllers/noteController.ts";

const router: Router = express.Router();

router.get("/", findOrCreateUser, noteController.getAllNotes)

router.get("/:id", findOrCreateUser, noteController.getNoteById)

router.post("/", noteController.createNote)

router.put("/:id", noteController.updateNote)

router.delete("/:id", noteController.deleteNote)

export default router;