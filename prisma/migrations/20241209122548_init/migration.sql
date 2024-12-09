-- CreateTable
CREATE TABLE "positions" (
    "id" SERIAL NOT NULL,
    "bk" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "company" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "valid_from" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valid_to" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "positions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "positions_bk_valid_from_key" ON "positions"("bk", "valid_from");

-- CreateIndex
CREATE UNIQUE INDEX "positions_bk_valid_to_key" ON "positions"("bk", "valid_to");
