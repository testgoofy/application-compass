import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const client = new PrismaClient();

export default async function DetailPosition({params} : {params: Promise<{bk: string}>}) {

    const { bk } = await params

    const position = await client.position.findFirst({
        where: {
            bk: bk,
            valid_from: undefined
        }
    })

    return (
        <div className="flex justify-between items-center">
            <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                    <p className="text-3xl font-bold text-gray-900">{position?.title}</p>
                    <p className="ml-2 mt-1 text-xl text-gray-500">at {position?.company}</p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex">
                    <button className="p-2 m-2 bg-blue-500 text-white rounded" >
                        <Image src="/edit.svg" alt="edit" width={12} height={12}/>
                    </button>
                    <button className="p-2 m-2 bg-red-500 text-white rounded" >
                        <Image src="/trash.svg" alt="edit" width={12} height={12}/>
                    </button>
                </div>
                <p className="text-xl text-gray-900">{position?.salary.toLocaleString('gsw', { style: 'currency', currency: 'CHF' })}</p>
            </div>
        </div>
    )
}