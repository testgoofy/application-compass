import type { Process } from "@prisma/client";
import client from "@/app/_logic/database";

export default async function Processes() {

  const processes = await client.process.findMany({
    include: {
      processNodes: true
    }
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">
          Processes
        </h1>
      </div>
      <ul className="divide-y divide-gray-200 border border-gray-300 rounded-lg">
            {processes.map((process: Process) => (
                <p>{ process.name }</p>
            ))}
        </ul>
    </div>
  );
}