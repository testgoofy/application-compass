import Link from "next/link";

export default function Header() {
    return (
        <nav className="bg-blue-500">
            <div className="mx-auto max-w-7xl py-2 sm:px-6 px-2 lg:px-8">
                <Link href="/">
                    <p className="text-2xl text-white">
                        Application Compass
                    </p>
                </Link>
            </div>
        </nav>   
    )
}