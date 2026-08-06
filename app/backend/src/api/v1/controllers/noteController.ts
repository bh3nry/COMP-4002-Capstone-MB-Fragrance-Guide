import type { Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express";
import * as noteService from "../services/noteService.ts";
import { successResponse } from "../models/responseModel.ts";
import type { NoteWithUsers } from "../../../../types/noteWithUsers.ts";


type Notes = {
    id: number;
    name: string;
    description?: string | null;
    isFavourite: boolean;
};


export function toFrontendNotes(
    backendNote: NoteWithUsers,
    userId?: string | null
): Notes {
    const {id, name, description } = backendNote;

    return {
        id: id,
        name: name,
        description: description,
        isFavourite: (userId != null) && 
            backendNote.userNotes.some(un => un.userId === userId)
    }
}

export const getAllNotes = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { userId } = getAuth(req);

        const notes = await noteService.getAllNotes();

        const frontendNotes: Notes[] = notes.map(n => 
            toFrontendNotes(n, userId));
        
            res.status(200).json(
            successResponse(frontendNotes, "Notes retrieved succesfully")
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
        const { userId } = getAuth(req);
        const note = await noteService.getNotesById(id)
        if (!note) {
            res.status(404).json({ error: "Note not found" });
            return;
        }

        const frontendNote = toFrontendNotes(note, userId);
        res.status(200).json(
            successResponse(frontendNote, "Note retrieved successfully")
        );
    } catch (error) {
        res.status(404).json({ error: "Note not found" });
    }
};

export const createNote = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newNote = await noteService.createNote(req.body);
        const responseNote = toFrontendNotes(newNote as NoteWithUsers);
        res.status(201)
            .json(successResponse(responseNote, "Note created successfully"))
    } catch (error) {
        res.status(500).json({ error: "Failed to create note" });
    }
};

export const updateNote = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const updatedTerm = await noteService.updateNote(
            Number.parseInt(req.params.id as string),
            req.body
        );
        const responseNote = toFrontendNotes(updatedTerm as NoteWithUsers);
        res.status(200)
            .json(successResponse(responseNote, "Note updated succesfully"));
    } catch(error) {
        next(error);
    }
};

export const deleteNote = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        await noteService.deleteNote(Number.parseInt(req.params.id as string));
        res.status(200)
            .json(successResponse(null, "Note deleted succesfully"));
    } catch(error) {
        next(error);
    }
};