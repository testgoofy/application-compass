export default function TextField({id, title, value, className} : {id: string, title: string, value?: string, className?: string}) {

    return (
        <div className={className}>
            <label htmlFor={id} className="pl-3 block text-sm/6 font-medium text-gray-900">{title}</label>
            <div className="flex px-3 items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <textarea name={id} id={id} defaultValue={value} className="block min-w-0 grow py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 h-56" />
            </div>
        </div>
    )
}