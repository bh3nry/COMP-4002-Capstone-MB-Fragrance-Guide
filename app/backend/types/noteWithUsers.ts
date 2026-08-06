import { Prisma } from "../generated/prisma/client.js";


const noteWithUsers = Prisma.validator<Prisma.UserDefaultArgs>()({
    include: { userNotes: true}
});

export type NoteWithUsers = Prisma.NoteGetPayload<typeof noteWithUsers>;