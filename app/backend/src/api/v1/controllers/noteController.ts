import type { Request, Response, NextFunction } from "express";
// import type {Notes} from "@prisma/client";
import * as noteService from "../services/noteService.js";
import { successResponse } from "../models/responseModel.js";


export const getAllNotes = async(
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const notes = await noteService.getAllNotes();
        res.status(200).json(
            successResponse(notes, "Notes retrieved succesfully")
        );
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch notes" });
    }
};

export const getNoteById = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const id = Number(req.params.id);

    try {
        const notes = await noteService.getNotesById(id)
        res.status(200).json(
            successResponse(notes, "Note retrieved successfully")
        );
    } catch (error) {
        res.status(404).json({ error: "Note not found" });
    }
};