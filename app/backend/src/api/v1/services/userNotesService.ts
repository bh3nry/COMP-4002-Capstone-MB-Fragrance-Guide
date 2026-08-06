import { prisma } from "../../../../prisma/prisma.js";

export const getUserNote = async(
    userId: string,
    noteId: number
) => {
    const userNote = await prisma.userNote.findUnique({
        where: {
            userId_noteId: {
                userId: userId,
                noteId: noteId
            }
        }
    });

    if(!userNote) {
        return null;
    } else {
        return userNote;
    }
} 

export const createUserNote =  async(
    userId: string,
    noteId: number
) => {
    const existingUserNote = await prisma.userNote.findUnique({
        where: {
            userId_noteId: {
                userId: userId,
                noteId: noteId
            }
        }
    });

    if(existingUserNote) {
        throw new Error(`Note with id ${noteId} already associated with user with id ${userId}`);
    }

    const newUserNote = await prisma.userNote.create({
        data: {
            userId: userId,
            noteId: noteId
        }
    });

    return newUserNote;
}

export const deleteUserNote = async( 
    userId: string, 
    noteId: number
): Promise<void> => {
    await prisma.userNote.delete({
        where: {
            userId_noteId: {
                userId: userId,
                noteId: noteId
            }
        }
    });
}