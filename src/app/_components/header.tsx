'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

function LinkButton({endpoint, name}: {endpoint: string, name: string}) {
    console.log(`usePathname: ${usePathname()}, endpoint: ${endpoint}, match: ${usePathname() === endpoint}`)
    return (
        <Link href={endpoint} className={"text-base text-white py-1 px-2 rounded-md hover:bg-blue-700 hover:underline" + (usePathname() === endpoint ? " bg-blue-600" : "")}>
            {name}
        </Link>
    )
}

export default function Header() {
    return (
        <nav className="bg-blue-500">
            <div className="mx-auto max-w-7xl py-2 sm:px-6 px-2 lg:px-8 flex justify-between items-center">
                <div>
                    <Link href="/" className="text-2xl text-white">
                            Application Compass
                    </Link>
                </div>
                <div className="flex gap-2">
                    <LinkButton endpoint="/" name="Positions" />
                    <LinkButton endpoint="/processes" name="Processes" />
                </div>
            </div>
        </nav>   
    )
}