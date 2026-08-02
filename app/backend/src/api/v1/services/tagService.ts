import { prisma } from "../../../../prisma/prisma";

// returns all tags for the logged in user
export const fetchTags = async (clerkId: string) => {
    return await prisma.userTag.findMany({
        where: { clerkId }
    });
};

// replaces all tags for the logged in user
export const saveTags = async (clerkId: string, tags: string[]) => {

    // deletes all existing tags for this user
    await prisma.userTag.deleteMany({
        where: { clerkId }
    });

    // creates new tags for this user
    return await prisma.userTag.createMany({
        data: tags.map((tag) => ({ clerkId, tag }))
    });
};