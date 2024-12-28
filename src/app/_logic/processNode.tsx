import type { ProcessNode } from '@prisma/client'
import client from '@/app/_logic/database';

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
 * Calculates the index and total number of nodes in the process.
 *
 * @param node - The current node for which the index and total are to be calculated.
 * @returns A promise that resolves to an object containing the index of the current node
 *          and the total number of nodes in the process.
 */

export async function nodeIndex(node: ProcessNode): Promise<{index: number, total: number}> {
    let index = 0
    let total = 1
    
    let current = node
    let previous = await previousNode(current)
    while (previous != null) {
        index++
        total++
        current = previous
        previous = await previousNode(current)
    }

    current = node
    let next = await nextNode(current)
    while (next != null) {
        total++
        current = next
        next = await nextNode(current)
    }

    return {'index': index, 'total': total}
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