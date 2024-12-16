/*
  Warnings:

  - You are about to drop the column `status` on the `positions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "positions" DROP COLUMN "status",
ADD COLUMN     "stateId" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "process_edges" (
    "id" SERIAL NOT NULL,
    "fromId" INTEGER NOT NULL,
    "toId" INTEGER NOT NULL,

    CONSTRAINT "process_edges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "process_nodes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "process_nodes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "process_nodes_name_key" ON "process_nodes"("name");

-- AddForeignKey
ALTER TABLE "process_edges" ADD CONSTRAINT "process_edges_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "process_nodes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "process_edges" ADD CONSTRAINT "process_edges_toId_fkey" FOREIGN KEY ("toId") REFERENCES "process_nodes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "positions" ADD CONSTRAINT "positions_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "process_nodes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
