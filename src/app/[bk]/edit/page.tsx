import Form from 'next/form'
import { PrismaClient } from "@prisma/client";
import Dropdown from "../../_components/dropdown";
import TextInput from "../../_components/textInput";
import NumberInput from "../../_components/numberInput";
import TextArea from "../../_components/textArea";
import { redirect } from 'next/navigation';

const client = new PrismaClient();

export default async function EditPosition({params} : {params: Promise<{bk: string}>}) {

    const { bk } = await params
    
    const position = await client.position.findFirst({
        where: {
            bk: bk,
            valid_to: null
        }
    })

    async function handler(formData: FormData) {
        'use server'
        
        await client.position.update({
            where: {
                id: position?.id
            },
            data: {
                valid_to: new Date(),
                deleted_at: new Date()
            }
        })

        await client.position.create({
            data: {
                bk: bk,
                title: formData.get('title') as string,
                company: formData.get('company') as string,
                salary: parseInt(formData.get('salary') as string),
                status: formData.get('status') as string,
                requirements: formData.get('requirements') as string,
                description: formData.get('description') as string
            }
        })

        redirect('/' + bk)
    }

    return (
        <div>
            <p className="text-3xl font-bold">
            Edit Position
            </p>
            <Form action={handler}>
                <TextInput id="title" title="Title of the Position" value={position?.title} placeholder="Data Scientist" />
                <TextInput id="company" title="Company" value={position?.company} placeholder="Google Inc." />
                <NumberInput id="salary" title="Yearly Salary" value={position?.salary == null ? undefined : position?.salary} placeholder="100000" suffix="CHF" />
                <Dropdown id="status" title="Status" value={position?.status} options={['Initial', 'Applied', 'Interview Round 1', 'Interview Round 2', 'Offer', 'Rejected']}/>
                <TextArea id='requirements' title='Job Requirements' value={position?.requirements == null ? undefined : position?.requirements}/>
                <TextArea id='description' title='Job Description' value={position?.description == null ? undefined : position?.description}/>
                <input type="submit" value="Submit" className="p-2 m-2 bg-blue-500 text-white rounded" />
            </Form>
        </div>
    )
}