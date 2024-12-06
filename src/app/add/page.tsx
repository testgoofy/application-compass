import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export default async function AddPosition() {

    return (
        <p className="text-3xl font-bold">
          Add new Position
        </p>
    )
}