import PositionList from "./_components/positionList";
import { PrismaClient } from "@prisma/client";
import ButtonLink from "./_components/buttonLink";
import Link from "next/link";
import Image from "next/image";

const client = new PrismaClient();

export const dynamic = 'force-dynamic'

export default async function Home() {

  const positions = await client.position.findMany({
    where: {
      valid_to: null,
      deleted_at: null
    }
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">
          Positions
        </h1>
        <Link href="/add" className="flex justify-between items-center bg-blue-500 text-white p-1 rounded-md">
          <Image src="/plus.svg" alt="Add" width={24} height={24} />
          <p className="text-base">New Position</p>
        </Link>
      </div>
      <PositionList positions={positions} />
    </div>
  );
}
