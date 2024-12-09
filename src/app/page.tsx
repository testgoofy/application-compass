import Link from "next/link";
import PositionListItem from "./_components/positionListItem";
import { PrismaClient } from "@prisma/client";
import ButtonLink from "./_components/buttonLink";

const client = new PrismaClient();

export default async function Home() {

  const positions = await client.position.findMany();

  return (
    <div>
      <div className="flex justify-between items-start">
        <p className="text-3xl font-bold">
          Positions
        </p>
        <ButtonLink text="Add Position" endpoint="/add" />
      </div>
      <ul className="divide-y divide-gray-1">
        {positions.map((position) => (
          <PositionListItem key={position.id} id={position.bk} title={position.title} company={position.company} salary={position.salary} />
        ))}
      </ul>
    </div>
  );
}
