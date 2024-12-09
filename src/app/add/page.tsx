import Form from 'next/form'
import { PrismaClient } from "@prisma/client";
import Dropdown from "../_components/dropdown";
import TextInput from "../_components/textInput";
import NumberInput from "../_components/numberInput";
import TextArea from "../_components/textArea";
import { redirect } from 'next/navigation';

const client = new PrismaClient();

export default async function AddPosition() {

    async function handler(formData: FormData) {
        'use server'
        await client.position.create({
            data: {
                title: formData.get('title') as string,
                requirements: formData.get('description') as string,
                company: formData.get('company') as string,
                salary: parseInt(formData.get('salary') as string) != 0 ? parseInt(formData.get('salary') as string) : null,
                status: formData.get('status') as string
            }
        })

        redirect('/')
    }

    return (
        <div>
            <p className="text-3xl font-bold">
            Add new Position
            </p>
            <Form action={handler}>
                <TextInput id="title" title="Title of the Position" placeholder="Data Scientist" />
                <TextInput id="company" title="Company" placeholder="Google Inc." />
                <NumberInput id="salary" title="Yearly Salary" placeholder="100000" suffix="CHF" />
                <Dropdown id="status" title="Status" options={['Initial', 'Applied', 'Interview Round 1', 'Interview Round 2', 'Offer', 'Rejected']} />
                <TextArea id='requirements' title='Job Requirements'/>
                <input type="submit" value="Submit" className="p-2 m-2 bg-blue-500 text-white rounded" />
            </Form>
        </div>
    )
}