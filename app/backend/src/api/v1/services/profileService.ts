import { prisma } from "../../../../prisma/prisma.js";

// returns the first profile from the database
export const fetchProfile = async (clerkId: string) => {
    try {
        return await prisma.profile.findFirst({
            where: { clerkId }
        });
    } catch (error) {
        console.error("Prisma error in fetchProfile:", error);
        throw error;
    }
};

// updates or creates the profile in the database
export const saveProfile = async (clerkId: string, displayName: string, bio: string) => {
    try {
        return await prisma.profile.upsert({
            where: { clerkId },
            update: { displayName, bio },
            create: { clerkId, displayName, bio },
        });
    } catch (error) {
        console.error("Prisma error in saveProfile:", error);
        throw error;
    }
};