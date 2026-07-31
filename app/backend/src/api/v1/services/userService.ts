import { prisma } from "../../../../prisma/prisma.js";

export const getUserById = async(id: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        });

        return user;
    }   catch(error) {
        throw new Error(`Failed to fetch user with id ${id}`)
    }
} 

export const createUser = async(userData: { id: string}) => {
    const newUser = await prisma.user.create({
        data: {
            ...userData
        }
    });

    return newUser;
}

