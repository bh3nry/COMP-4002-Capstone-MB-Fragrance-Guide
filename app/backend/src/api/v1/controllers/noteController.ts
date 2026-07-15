import type { Request, Response, NextFunction } from "express";
// import type {Notes} from "@prisma/client";
import * as noteService from "../services/noteService";
import { successResponse } from "../models/responseModel";


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
        next(error);
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
            successResponse(notes, "Note retireved successfully")
        );
    } catch (error) {
        next(error);
    }
};