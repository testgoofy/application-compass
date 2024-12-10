import PositionList from "./_components/positionList";
import { PrismaClient } from "@prisma/client";
import ButtonLink from "./_components/buttonLink";

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
    <div>
      <div className="flex justify-between items-start">
        <p className="text-3xl font-bold">
          Positions
        </p>
        <ButtonLink text="Add Position" endpoint="/add" />
      </div>
      <PositionList positions={positions} />
    </div>
  );
}
