
import { prisma } from "../../../../prisma/prisma.js";

export const getScentsFromDb = async () => {
    try {
        console.log("Scent Repo: Calling Scent DB ...")
        const notesData = await prisma.scents.findMany()
        console.log(notesData)
        return notesData
    } catch (error) {
        
    }
}