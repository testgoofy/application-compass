import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import TextInput from "@/app/_components/textInput";
import NumberInput from "@/app/_components/numberInput";
import Form from "next/form";
import PositionTab from "@/app/_components/positionTab";
import { redirect } from "next/navigation";

const client = new PrismaClient();

export default async function EditPosition({ params }: { params: Promise<{ bk: string }> }) {
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
            }
        })

        await client.position.create({
            data: {
                bk: bk,
                title: formData.get('title') as string,
                company: formData.get('company') as string,
                degree: formData.get('degree') as string,
                begin: formData.get('begin') as string,
                duration: formData.get('duration') as string,
                salary: parseInt(formData.get('salary') as string),
                status: "",
                notes: formData.get('notes') as string,
                description: formData.get('description') as string,
                requirements: formData.get('requirements') as string,
            }
        })

        redirect('/' + bk)
    }

    return (
        <Form action={handler}>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                    {/* Top Navigation (Back, Edit, Delete) */}
                    <Link href={"/" + bk} className="flex justify-between items-center gap-1">
                        <Image src={"/arrow-left.svg"} alt="Return" width={18} height={18} />
                        <p className="text-base">Abort to position</p>
                    </Link>
                    <div className="flex gap-2">
                        <button type="submit" className="flex justify-between items-center gap-1 bg-green-500 text-white p-1 pr-2 rounded-md">
                            <Image src="/check.svg" alt="Save" width={18} height={18} />
                            <p className="text-base">Save</p>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col border border-gray-300 divide-y divide-gray-300 rounded-lg px-2">
                    {/* Position Summary */}
                    <div className="flex content-end py-1">
                        <div className="flex items-center w-1/2">
                            <p className="text-base font-semibold">Job Title</p><p className="text-red-500 font-semibold pl-1">*</p>
                        </div>
                        <TextInput id="title" title="" value={position?.title} className="w-1/2" placeholder="Data Scientist" />
                    </div>
                    <div className="flex content-end py-1">
                        <div className="flex items-center w-1/2">
                            <p className="text-base">Company</p><p className="text-red-500 pl-1">*</p>
                        </div>
                        <TextInput id="company" title="" value={position?.company} className="w-1/2" placeholder="Google Inc." />
                    </div>
                    <div className="flex content-end py-1">
                        <div className="flex items-center w-1/2">
                            <p className="text-base">Degree of Employment</p>
                        </div>
                        <TextInput id="degree" title="" value={position?.degree == null ? undefined : position.degree} className="w-1/2" placeholder="80 - 100%"/>
                    </div>
                    <div className="flex content-end py-1">
                        <div className="flex items-center w-1/2">
                            <p className="text-base">Begin of Employment</p>
                        </div>
                        <TextInput id="begin" title="" value={position?.begin == null ? undefined : position.begin} className="w-1/2" placeholder="March 2025"/>
                    </div>
                    <div className="flex content-end py-1">
                        <div className="flex items-center w-1/2">
                            <p className="text-base">Duration of Employment</p>
                        </div>
                        <TextInput id="duration" title="" value={position?.duration == null ? undefined : position.duration} className="w-1/2" placeholder="unlimited"/>
                    </div>
                    <div className="flex content-end py-1">
                        <div className="flex items-center w-1/2">
                            <p className="text-base">Salary per Year</p>
                        </div>
                        <NumberInput id="salary" title="" value={position?.salary == null ? undefined : position.salary} className="w-1/2" placeholder="100000" suffix="CHF" />
                    </div>
                </div>
                <PositionTab
                    edit
                    notes={position?.notes != null ? position.notes : undefined}
                    description={position?.description != null ? position.description : undefined}
                    requirements={position?.requirements != null ? position.requirements : undefined}
                />
                </div>
        </Form>
    )
}