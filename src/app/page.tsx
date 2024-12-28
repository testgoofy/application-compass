import PositionList from "./_components/positionList";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import { redirect } from "next/navigation";

const client = new PrismaClient();

export const dynamic = 'force-dynamic'

export default async function Home() {

  const positions = await client.position.findMany({
    where: {
      valid_to: null,
      deleted_at: null
    },
    include: {
      state: true
    }
  });

  async function handler() {
    'use server'

    const position = await client.position.create({
      data: {
          title: "New Position",
          company: "",
      }
    })

    redirect('/' + position.bk + '/edit')
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">
          Positions
        </h1>
        <button type="button" onClick={handler} className="flex justify-between items-center bg-blue-500 text-white p-1 pr-2 rounded-md">
          <Image src="/plus.svg" alt="Add" width={18} height={18} />
          <p className="text-base">New Position</p>
        </button>
      </div>
      <PositionList positions={positions} />
    </div>
  );
}
