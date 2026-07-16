import { prisma } from "../../../../prisma/prisma";


export const getAllNotes = async() => {
    return prisma.note.findMany();
};

export const getNotesById = async(id: number) => {
    try {
        const note = await prisma.note.findUnique({
            where: {
                id: id
            }
        });

        return note;
    }   catch(error) {
        throw new Error(`Failed to fetch term with id ${id}`)
    }
} 