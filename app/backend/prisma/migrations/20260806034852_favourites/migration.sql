-- CreateTable
CREATE TABLE "UserNote" (
    "userId" TEXT NOT NULL,
    "noteId" INTEGER NOT NULL,

    CONSTRAINT "UserNote_pkey" PRIMARY KEY ("userId","noteId")
);

-- AddForeignKey
ALTER TABLE "UserNote" ADD CONSTRAINT "UserNote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNote" ADD CONSTRAINT "UserNote_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "Note"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
