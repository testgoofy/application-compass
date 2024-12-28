import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

async function seeding() {
    await client.position.deleteMany()
    await client.processEdge.deleteMany()
    await client.processNode.deleteMany()

    // Create Process Nodes
    const init = await client.processNode.create({
        data: {
            name: 'Initial'
        }
    })

    const applied = await client.processNode.create({
        data: {
            name: 'Applied'
        }
    })

    const interview1 = await client.processNode.create({
        data: {
            name: 'Interview Round 1'
        }
    })

    const interview2 = await client.processNode.create({
        data: {
            name: 'Interview Round 2'
        }
    })

    const offering =  await client.processNode.create({
        data: {
            name: 'Contract Offering'
        }
    })

    const accepted = await client.processNode.create({
        data: {
            name: 'Accepted'
        }
    })

    const rejectedCompany = await client.processNode.create({
        data: {
            name: 'Rejected by Company'
        }
    })

    const rejectedApplicant = await client.processNode.create({
        data: {
            name: 'Rejected by Applicant'
        }
    })

    // Create Process Edges
    await client.processEdge.create({
        data: {
            fromId: init.id,
            toId: applied.id
        }
    })

    await client.processEdge.create({
        data: {
            fromId: applied.id,
            toId: interview1.id
        }
    })

    await client.processEdge.create({
        data: {
            fromId: interview1.id,
            toId: interview2.id
        }
    })

    await client.processEdge.create({
        data: {
            fromId: interview2.id,
            toId: offering.id
        }
    })

    await client.processEdge.create({
        data: {
            fromId: offering.id,
            toId: accepted.id
        }
    })

    // Create Positions
    await client.position.create({
        data: {
            title: 'Software Engineer',
            company: 'Company Inc.',
            stateId: init.id
        }
    })

    await client.position.create({
        data: {
            title: 'Professional Computer Specialist',
            company: 'E.Xample and Brothers',
            stateId: applied.id,
            begin: 'next Month',
            salary: 100_000,
            degree: '80 - 100%',
            duration: 'unlimited',
            notes: 'Location: Earth',
            description: '- Assembling computers\n- Disassembling computers',
            requirements: '- Computer Science degree\n- 2 years of experience'
        }
    })

    await client.position.create({
        data: {
            title: 'Specialist for Specific Questions about Computers',
            company: 'Some Random Company',
            stateId: rejectedCompany.id,
        }
    })
}

seeding()
.then(async () => {
    await client.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await client.$disconnect()
    process.exit(1)
})