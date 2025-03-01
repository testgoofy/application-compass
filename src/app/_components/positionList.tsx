import type { Position } from '@prisma/client'
import PositionListItem from "./positionListItem";


export default function PositionList({ positions }: { positions: Position[] }) {

    if (positions.length == 0) {
        return (
            <div className='h-64 flex justify-center items-center border border-dashed border-gray-300 rounded-lg'>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-semibold border-gray-600">No positions yet</p>
                </div>
            </div>
        )
    }

    const done = positions.filter((position: any) => position.state.group == 'Done')
    const progress = positions.filter((position: any) => position.state.group == 'InProgress')
    const rejected = positions.filter((position: any) => position.state.group == 'Rejected')

    return (
        <ul className="divide-y divide-gray-200 border border-gray-300 rounded-lg">
            {done.map((position: Position) => (
                <PositionListItem key={position.bk} id={position.bk} title={position.title} company={position.company} salary={position.salary ?? undefined} stateId={position.stateId} />
            ))}
            {progress.map((position: Position) => (
                <PositionListItem key={position.bk} id={position.bk} title={position.title} company={position.company} salary={position.salary ?? undefined} stateId={position.stateId} />
            ))}
            {rejected.map((position: Position) => (
                <PositionListItem key={position.bk} id={position.bk} title={position.title} company={position.company} salary={position.salary ?? undefined} stateId={position.stateId} passive />
            ))}
        </ul>
    )
}