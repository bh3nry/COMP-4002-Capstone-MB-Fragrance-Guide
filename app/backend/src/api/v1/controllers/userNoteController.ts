import type { Request, Response, NextFunction } from "express";
import * as userNotesService from "../services/userNotesService.ts";
import { successResponse } from "../models/responseModel.ts";
import { getAuth } from "@clerk/express";


export const createUserNote = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { userId } = getAuth(req);

        if(userId) {
            const newUserNote = await userNotesService.createUserNote(
                userId,
                Number.parseInt(req.params.noteId as string)
            );
            res.status(201)
                .json(successResponse(newUserNote, "New UserNote created succesfully"));
        } else {
            throw new Error("User not found");
        }
    } catch(error) {
        next(error);
    }
}

export const deleteUserNote = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { userId } = getAuth(req);
        
        if(userId) {
            await userNotesService.deleteUserNote(
                userId,
                Number.parseInt(req.params.noteId as string)
            );
            res.status(200)
                .json(successResponse(null, "UserNote deleted succesfully"));
        } else {
            throw new Error("User not found");
        }
    } catch(error) {
        next(error);
    }
}