import { prisma } from "../../../../prisma/prisma.js";

// returns all locations from the database
export const fetchAllLocations = async () => {
    return await prisma.location.findMany({
        include: { saleLocations: true }
    });
};

// returns a single location by id
export const fetchLocationById = async (id: number) => {
    return await prisma.location.findUnique({
        where: { id },
        include: { saleLocations: true }
    });
};