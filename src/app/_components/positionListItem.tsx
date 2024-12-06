export default function PositionListItem({ title, company, salary }: { title?: string, company?: string, salary?: number }) {

    let loading = false
    let titleNode
    if (title === undefined) {
        titleNode = <div className="h-6 w-28 bg-slate-200 rounded"></div>
        loading = true
    }
    else {
        titleNode = <p className="text-base font-semibold text-gray-900">{title}</p>
    }

    let companyNode
    if (company === undefined) {
        companyNode = <div className="h-5 w-24 ml-2 mt-1 bg-slate-200 rounded"></div>
        loading = true
    }
    else {
        companyNode = <p className="ml-2 mt-1 text-sm text-gray-500">{company}</p>
    }

    let salaryNode
    if (salary === undefined) {
        salaryNode = <div className="h-6 w-28 bg-slate-200 rounded"></div>
        loading = true
    }
    else {
        salaryNode = <p className="text-base text-gray-900">{salary.toLocaleString('gsw', { style: 'currency', currency: 'CHF' })}</p>
    }

    return (
        <li className={(loading ? 'animate-pulse ' : '') + "flex justify-between gap-x-6 py-5"} >
            <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                    {titleNode}
                    {companyNode}
                </div>
            </div>
            <div className="flex items-center">
                {salaryNode}
            </div>
        </li >
    )
}