import { prisma } from "../../../../prisma/prisma";

// returns the first profile from the database
export const fetchProfile = async () => {
    return await prisma.profile.findFirst();
};

// updates or creates the profile in the database
export const saveProfile = async (displayName: string, bio: string) => {
    return await prisma.profile.upsert({
        where: { id: 1 },
        update: { displayName, bio },
        create: { displayName, bio },
    });
};