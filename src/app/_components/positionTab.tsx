"use client"

import { useState } from 'react';
import TailwindMarkdown from './markdown';

export default function PositionTab({notes, description, requirements} : {notes?: string, description?: string, requirements?: string}) {
    const [tab, setTab] = useState('notes')

    return (
        <div className="flex flex-col border border-gray-300 divide-y divide-gray-300 rounded-lg py-1 px-2">
            <ul className="flex justify-start">
                <li>
                    <button type="button" onClick={() => {setTab('notes')}} className={"py-2 px-4 border-b-2 " + (tab == "notes" ? "text-blue-600 border-blue-600" : "text-gray-500 hover:text-gray-900 border-transparent hover:border-gray-300")}>
                        Notes
                    </button>
                </li>
                <li>
                    <button type="button" onClick={() => {setTab('description')}} className={"py-2 px-4 border-b-2 " + (tab == "description" ? "text-blue-600 border-blue-600" : "text-gray-500 hover:text-gray-900 border-transparent hover:border-gray-300")}>
                        Job Description
                    </button>
                </li>
                <li>
                    <button type="button" onClick={() => {setTab('requirements')}} className={"py-2 px-4 border-b-2 " + (tab == "requirements" ? "text-blue-600 border-blue-600" : "text-gray-500 hover:text-gray-900 border-transparent hover:border-gray-300")}>
                        Requirements
                    </button>
                </li>
            </ul>
            <div className="pt-2 px-2 h-64 overflow-y-auto">
                {tab == 'notes' && notes && (<TailwindMarkdown children={notes} />)}
                {tab == 'description' && description && (<TailwindMarkdown children={description} />)}
                {tab == 'requirements' && requirements && (<TailwindMarkdown children={requirements} />)}
            </div>
        </div>
    )
}