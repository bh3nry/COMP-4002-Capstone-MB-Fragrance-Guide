import { prisma } from "../../../../prisma/prisma.js";

export const getScentsFromDb = async () => {
    try {
        console.log("Scent Repo: Calling Scent DB ...")
        const notesData = await prisma.scents.findMany()
        return notesData
    } catch (error) {
        console.log(error)
    }
}