import type { Position } from '@prisma/client'
import { PrismaClient } from "@prisma/client";
import Node from './node'
import Edge from './edge'
import { nextNode } from '@/app/_logic/processNode'
import { previousNode } from '@/app/_logic/processNode'

export default async function Process({position} : {position: Position}) {

    const client = new PrismaClient();

    const state = await client.processNode.findFirst({
        where: {
            id: position.stateId
        }
    })
    
    const next = await nextNode(state)
    const next2 = await nextNode(next)
    const next3 = await nextNode(next2)

    const previous = await previousNode(state)
    const previous2 = await previousNode(previous)
    const previous3 = await previousNode(previous2)

    if (!state) {
        throw new Error("Undefined state");
    }

    let stateAppearance: 'active' | 'inactive' | 'passed' | 'failed' = 'active'
    if (state.group == 'Done') {
        stateAppearance = 'passed'
    }
    else if (state.group == 'Rejected') {
        stateAppearance = 'failed'
    }
        

    return (
        <div className='flex justify-center'>
            <div className="flex items-center -space-x-2">
                { previous3 && <Edge state='passed' start/> }
                { previous2 && <Node name={previous2.name} state='passed' /> }
                { previous2 && <Edge state='passed'/> }
                { previous && <Node name={previous.name} state='passed' /> }
                { previous && <Edge state='passed'/> }
                <Node name={state.name} state={stateAppearance}/>
                { next && <Edge /> }
                { next && <Node name={next.name} /> }
                { next2 && <Edge /> }
                { next2 && <Node name={next2.name} /> }
                { next3 && <Edge end /> }
            </div>
        </div>
    )
}
