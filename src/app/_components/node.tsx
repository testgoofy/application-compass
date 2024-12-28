export default function Node ({name, state = 'inactive'}: {name: string, state?: 'active' | 'inactive' | 'passed' | 'failed'}) {
    
    let background
    let border
    switch (state) {
        case 'active':
            background = 'bg-blue-100'
            border = 'border-blue-500'
            break;
        case 'passed':
            background = 'bg-green-100'
            border = 'border-green-500'
            break;
        case 'failed':
            background = 'bg-red-100'
            border = 'border-red-500'
            break;
        case 'inactive':
        default:
            background = 'bg-gray-100'
            border = 'border-gray-300'
            break;
    }
    
    return (
        <div className="flex flex-col items-center w-8 -mx-4">
            <div className="h-12"></div>
            <div className={`h-8 w-8 border-2 ${background} ${border} rounded-full flex justify-center items-center z-10`}></div>
            <div className="flex h-12 w-24 justify-center items-center">
                <p className="text-center">{name}</p>
            </div>
        </div>
    )
}
