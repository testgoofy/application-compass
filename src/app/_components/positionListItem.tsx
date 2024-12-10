import Image from "next/image"
import Link from "next/link"

export default function PositionListItem({ id, title, company, salary }: { id: string, title: string, company: string, salary?: number }) {

    return (
        <li className='p-3 hover:bg-gray-50' >
            <Link href={`/details/${id}`} className='flex justify-between items-stretch'>
                <div className='flex flex-col items-start w-1/3 lg:w-1/4'>
                    <p className='text-base font-semibold'>{title}</p>
                    <p className='text-xs text-gray-600'>at {company}</p>
                </div>
                <div className='grow hidden sm:block flex flex-col justify-start items-start'>
                    <p className='text-sm text-gray-600'>Progress: 1/3</p>
                    {salary && (<p className='text-sm text-gray-600'>{salary.toLocaleString('gsw')} CHF/year</p>)}
                </div>
                <div className='flex justify-center'>
                    <Image src={"/chevron-right.svg"} alt="More >" width={32} height={32} />
                </div>
            </Link>
        </li >
    )
}