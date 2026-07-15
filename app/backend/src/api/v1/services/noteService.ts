import prisma from "../../../../prisma/client";
import { Notes } from "@prisma/client";

export const getAllNotes = async(): Promise<Notes[]> => {
    return prisma.notes.findMany();
};

export const getNotesById = async(id: number): Promise<Notes | null> => {
    try {
        const note = await prisma.notes.findUnique({
            where: {
                id: id
            }
        });

        return note;
    }   catch(error) {
        throw new Error(`Failed to fetch term with id ${id}`)
    }
} 