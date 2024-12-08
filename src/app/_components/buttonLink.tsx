import Link from "next/link";

export default function ButtonLink({text, endpoint} : {text: string, endpoint: string}) {
    return (
        <Link href={endpoint} className="p-2 m-2 bg-blue-500 text-white rounded">{text}</Link>
    )
}