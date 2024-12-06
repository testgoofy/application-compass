import Link from "next/link";
import PositionListItem from "./_components/positionListItem";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export default async function Home() {

  const positions = await client.position.findMany();

  return (
    <div>
      <div className="flex justify-between items-start">
        <p className="text-3xl font-bold">
          Positions
        </p>
        <Link href="/add" className="p-2 m-2 bg-blue-500 text-white rounded">
          Add
        </Link>
      </div>
      <ul className="divide-y divide-gray-100">
        {positions.map((position) => (
          <PositionListItem title={position.title} company={position.company} salary={position.salary} />
        ))}
      </ul>
    </div>
  );
}
