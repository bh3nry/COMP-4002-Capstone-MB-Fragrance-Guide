-- CreateTable
CREATE TABLE "UserTag" (
    "id" SERIAL NOT NULL,
    "clerkId" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "UserTag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTag_clerkId_tag_key" ON "UserTag"("clerkId", "tag");
