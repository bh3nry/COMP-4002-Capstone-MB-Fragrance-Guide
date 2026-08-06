import { Prisma } from "../generated/prisma";


const noteWithUsers = Prisma.validator<Prisma.UserDefaultArgs>()({
    include: { userNotes: true}
});

export type NoteWithUsers = Prisma.NoteGetPayload<typeof noteWithUsers>;