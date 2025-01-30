import { CircleCheck } from 'lucide-react';
import { CircleX } from 'lucide-react';
import Image from "next/image"
import Link from "next/link"
import Database from '@/app/_logic/database';
import { nodeIndex } from "@/app/_logic/processNode";

export default async function PositionListItem({ id, title, company, salary, stateId, passive }: { id: string, title: string, company: string, salary?: number, stateId?: number, passive?: boolean }) {

    let state
    if (stateId) {
            state = await Database.getInstance().processNode.findFirst({
              where: {
                id: stateId,
              },
            }); 
    }

    let stateJSX: JSX.Element | null = null
    if (state) {
        const index = await nodeIndex(state)

        if (state.group == 'Rejected') {
            stateJSX = (
                <div className="flex items-center gap-0.5">
                    <p className='text-sm text-gray-600'>State: </p>
                    <CircleX size={14} className='stroke-red-600' />
                    <p className='text-sm text-red-600'>{state.name}</p>
                </div>
            )
        }
        else if (index.index +1 == index.total) {
            stateJSX = (
                <div className="flex items-center gap-0.5">
                    <p className='text-sm text-gray-600'>State: </p>
                    <CircleCheck size={14} className='stroke-green-600' />
                    <p className='text-sm text-green-600'>{state.name}</p>
                </div>
            )
        }
        else {
            stateJSX = (
                <div className="flex items-center gap-0.5">
                    <p className='text-sm text-gray-600'>State: </p>
                    <p className='text-sm text-blue-700'>{index.index + 1}/{index.total} {state.name}</p>
                </div>
            )
        }
    }

    return (
        <li className={`p-3 ` + (passive ? 'bg-gray-100 hover:bg-gray-200' : 'hover:bg-gray-100')} >
            <Link href={`/${id}`} className='flex justify-between items-stretch'>
                <div className='flex flex-col items-start w-1/3 lg:w-1/4'>
                    <p className='text-base font-semibold max-w-full truncate'>{title}</p>
                    <p className='text-xs text-gray-600'>at {company}</p>
                </div>
                <div className='grow hidden sm:block flex flex-col justify-start items-start'>
                    {stateJSX}
                    {salary && (<p className='text-sm text-gray-600'>{salary.toLocaleString('gsw')} CHF/year</p>)}
                </div>
                <div className='flex justify-center'>
                    <Image src={"/chevron-right.svg"} alt="More >" width={32} height={32} />
                </div>
            </Link>
        </li >
    )
}