import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import PositionTab from "../_components/positionTab";
import { redirect } from "next/navigation";

const client = new PrismaClient();

export default async function DetailPosition({params} : {params: Promise<{bk: string}>}) {
    const { bk } = await params
    
    const position = await client.position.findFirst({
        where: {
            bk: bk,
            valid_to: null
        }
    })

    async function deleteHandler() {
        'use server'

        await client.position.update({
            where: {
                id: position?.id
            },
            data: {
                valid_to: new Date(),
                deleted_at: new Date()
            }
        })

        redirect('/')

    }

    async function editHandler() {
        'use server'
        redirect('/' + position?.bk + '/edit')
    }


    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                {/* Top Navigation (Back, Edit, Delete) */}
                <Link href="/" className="flex justify-between items-center gap-1">
                    <Image src={"/arrow-left.svg"} alt="Return" width={18} height={18} />
                    <p className="text-base">Back to positions</p>
                </Link>
                <div className="flex gap-2">
                    <button type="button" onClick={editHandler} className="flex justify-between items-center gap-1 bg-blue-500 text-white p-1 pr-2 rounded-md">
                        <Image src="/edit-2.svg" alt="Edit" width={18} height={18} />
                        <p className="text-base">Edit</p>
                    </button>
                    <button type="button" onClick={deleteHandler} className="flex justify-center border-2 border-red-500 items-center w-8 rounded-md">
                        <Image src="/trash-2.svg" alt="Delete" width={18} height={18} />
                    </button>
                </div>
            </div>

            <div className="flex flex-col border border-gray-300 divide-y divide-gray-300 rounded-lg py-1 px-2">
                {/* Position Summary */}
                <div className="flex content-end">
                    <h1 className="text-2xl font-bold w-1/2 sm:w-1/3 md:w-1/4">{position?.title}</h1>
                    <div className="flex flex-col justify-end">
                        <p className="text-base text-gray-600">at {position?.company}</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row divide-x-0 sm:divide-x divide-gray-300">
                    <div className="flex sm:flex-col items-center sm:w-1/4">
                        <p className="text-base font-semibold w-1/2 sm:w-fit">Degree</p>
                        <p className="text-base">80 - 100%</p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:w-1/4">
                        <p className="text-base font-semibold w-1/2 sm:w-fit">Begin</p>
                        <p className="text-base">May 2025</p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:w-1/4">
                        <p className="text-base font-semibold w-1/2 sm:w-fit">Duration</p>
                        <p className="text-base">unlimited</p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:w-1/4">
                        <p className="text-base font-semibold w-1/2 sm:w-fit">Salary</p>
                        {position?.salary && (<p className="text-base">{position?.salary.toLocaleString('gsw')} CHF/year</p>)}
                    </div>
                </div>
            </div>

            <PositionTab 
                notes=""
                description={position?.description != null ? position.description : undefined}
                requirements={position?.requirements != null ? position.requirements : undefined}
            />
        </div>
    )
}