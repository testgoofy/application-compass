export default function TextInput({id, title, options, value} : {id: string, title: string, options: string[], value?: string}) {

    return (
        <div>
            <label htmlFor={id} className="pl-3 block text-sm/6 font-medium text-gray-900">{title}</label>
            <div className="flex px-3 items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <select name={id} id={id} defaultValue={value} className="block min-w-0 grow py-1.5 bg-white text-base focus:outline focus:outline-0 sm:text-sm/6" >
                    {options.map((value) => (
                        <option key={value} value={value}>{value}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}