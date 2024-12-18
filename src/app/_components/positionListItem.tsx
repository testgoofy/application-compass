import Image from "next/image"
import Link from "next/link"
import { PrismaClient } from "@prisma/client";
import { stat } from "fs";

const client = new PrismaClient();

export default async function PositionListItem({ id, title, company, salary, stateId }: { id: string, title: string, company: string, salary?: number, stateId?: number}) {

    let state
    if (stateId) {
            state = await client.processNode.findFirst({
                where: {
                    id: stateId
                }
            }) 
    }

    return (
        <li className='p-3 hover:bg-gray-50' >
            <Link href={`/${id}`} className='flex justify-between items-stretch'>
                <div className='flex flex-col items-start w-1/3 lg:w-1/4'>
                    <p className='text-base font-semibold max-w-full truncate'>{title}</p>
                    <p className='text-xs text-gray-600'>at {company}</p>
                </div>
                <div className='grow hidden sm:block flex flex-col justify-start items-start'>
                    {state && <p className='text-sm text-gray-600'>Status: {state.name}</p>}
                    {salary && (<p className='text-sm text-gray-600'>{salary.toLocaleString('gsw')} CHF/year</p>)}
                </div>
                <div className='flex justify-center'>
                    <Image src={"/chevron-right.svg"} alt="More >" width={32} height={32} />
                </div>
            </Link>
        </li >
    )
}