export default function Edge({state = 'inactive', start, end}: {state?: 'active' | 'inactive' | 'passed' | 'failed', start?: boolean, end?: boolean}) {
    
    let background
    let border
    switch (state) {
        case 'active':
            background = 'blue-100'
            border = 'border-blue-500'
            break;
        case 'passed':
            background = 'green-100'
            border = 'border-green-500'
            break;
        case 'failed':
            background = 'red-100'
            border = 'border-red-500'
            break;
        case 'inactive':
        default:
            background = 'gray-100'
            border = 'border-gray-300'
            break;
    }
    
    return (
         <div className={`flex`}>
             {start && <div className={`h-3 w-12 bg-gradient-to-l from-transparent to-white relative -right-12`}></div>}
             <div className={`h-3 ${start || end ? 'min-w-12' : 'w-24'} border-2 ${start ? 'border-l-0' : ''} ${end ? 'border-r-0' : ''} ${'bg-' + background} ${border} border-dashed`}></div>
             {end && <div className={`h-3 w-12 bg-gradient-to-r from-transparent to-white relative -left-12`}></div>}
         </div>
    )
}
