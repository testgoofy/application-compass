import type { ProcessNode } from '@prisma/client'
import type { ProcessEdge } from '@prisma/client'
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

/**
 * Retrieves the next node in the process.
 *
 * @param node - The current node, or null if there is no current node.
 * @returns A promise that resolves to the next node, or null if there is no next node.
 */

export async function nextNode(node: ProcessNode | null) : Promise<ProcessNode | null> {
    if (node == null) {
        return null
    }

    const edge = await client.processEdge.findFirst({
        where: {
            fromId: node.id,
        }
    })

    if (edge == null) {
        return null
    }

    return await client.processNode.findFirst({
        where: {
            id: edge.toId
        }
    })
}

/**
 * Retrieves the previous node in the process.
 *
 * @param node - The current node, or null if there is no current node.
 * @returns A promise that resolves to the previous node, or null if there is no previous node.
 */
export async function previousNode(state: ProcessNode | null) : Promise<ProcessNode | null> {
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
            id: edge.fromId
        }
    })
}