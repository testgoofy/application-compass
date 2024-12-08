import Form from 'next/form'
import { PrismaClient } from "@prisma/client";
import TextInput from "../_components/textInput";
import NumberInput from "../_components/numberInput";
import { redirect } from 'next/navigation';

const client = new PrismaClient();

export default async function AddPosition() {

    async function handler(formData: FormData) {
        'use server'
        await client.position.create({
            data: {
                title: formData.get('title') as string,
                company: formData.get('company') as string,
                salary: parseInt(formData.get('salary') as string),
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
                <input type="submit" value="Submit" className="p-2 m-2 bg-blue-500 text-white rounded" />
            </Form>
        </div>
    )
}