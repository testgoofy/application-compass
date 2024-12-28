-- CreateEnum
CREATE TYPE "NodeGroup" AS ENUM ('InProgress', 'Done', 'Rejected');

-- AlterTable
ALTER TABLE "process_nodes" ADD COLUMN     "group" "NodeGroup" NOT NULL DEFAULT 'InProgress';
