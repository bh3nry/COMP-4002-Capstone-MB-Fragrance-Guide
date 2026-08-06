import type { Note } from "../../../../generated/prisma/client.js";
import { prisma } from "../../../../prisma/prisma.js";
import type { NoteWithUsers } from "../../../../types/noteWithUsers";


export const getAllNotes = async(): Promise<NoteWithUsers[]> => {
    return prisma.note.findMany({
        include: {
            userNotes: true
        }
    });
};

export const getNotesById = async(id: number): Promise<NoteWithUsers | null> => {
    try {
        const note = await prisma.note.findUnique({
            where: {
                id: id
            },
            include: {
                userNotes: true
            }
        });

        return note;
    }   catch(error) {
        throw new Error(`Failed to fetch note with id ${id}`)
    }
} 

export const createNote = async(noteData: {
    name: string,
    description: string
}): Promise<Note> => {
    const newNote: Note = await prisma.note.create({
        data: {
            ...noteData
        }
    });
    return newNote;
}

export const updateNote = async(
    id: number,
    noteData: {name: string, description: string}
): Promise<Note> => {
    const updatedNote: Note = await prisma.note.update({
        where: {
            id: id
        },
        data: {
            ...noteData
        }
    });
    return updatedNote;
}

export const deleteNote = async(id: number): Promise<void> => {
    await prisma.note.delete({
        where: {
            id: id
        }
    });
}