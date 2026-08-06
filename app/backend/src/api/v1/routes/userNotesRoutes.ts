import express, {Router} from "express";
// TODO: Add validation schema and middleware
// import { validateRequest } from "../middleware/validate";
// import { termSchema } from "../validations/termValidation";
import * as userNoteController from "../controllers/userNoteController.ts";
import { findOrCreateUser } from "../middleware/findOrCreateUser.ts";



const router: Router = express.Router();

router.post(
    "/:noteId/favourite",
    findOrCreateUser,
    userNoteController.createUserNote
);

router.delete(
    "/:noteId/favourite",
    findOrCreateUser,
    userNoteController.deleteUserNote
);

export default router;