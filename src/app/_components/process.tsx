import type { Position } from '@prisma/client'
import type { ProcessNode } from '@prisma/client'
import type { ProcessEdge } from '@prisma/client'
import { PrismaClient } from "@prisma/client";
import Node from './node'
import Edge from './edge'

export default async function Process({position} : {position: Position}) {
    
    async function nextState(state: ProcessNode | null) : Promise<ProcessNode | null> {

        if (state == null) {
            return null
        }

        const edge = await client.processEdge.findFirst({
            where: {
                fromId: state.id,
            }
        })

        if (edge == null) {
            return null
        }

        return await client.processNode.findFirst({
            where: {
                id: edge?.toId
            }
        })
    }

    async function previousState(state: ProcessNode | null) : Promise<ProcessNode | null> {

        if (state == null) {
            return null
        }

        const edge = await client.processEdge.findFirst({
            where: {
                toId: state.id,
            }
        })

        if (edge == null) {
            return null
        }

        return await client.processNode.findFirst({
            where: {
                id: edge?.fromId
            }
        })
    }

    const client = new PrismaClient();

    const state = await client.processNode.findFirst({
        where: {
            id: position.stateId
        }
    })
    
    const next = await nextState(state)
    const next2 = await nextState(next)
    const next3 = await nextState(next2)

    const previous = await previousState(state)
    const previous2 = await previousState(previous)
    const previous3 = await previousState(previous2)

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
