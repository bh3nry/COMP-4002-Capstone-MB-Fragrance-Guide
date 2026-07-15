import { prisma } from "../../../../prisma/prisma";


export const getAllNotes = async() => {
    return prisma.notes.findMany();
};

export const getNotesById = async(id: number) => {
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