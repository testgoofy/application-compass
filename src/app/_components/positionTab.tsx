"use client"

import { useState } from 'react';
import TailwindMarkdown from './markdown';
import TextField from './textArea';

export default function PositionTab({notes, description, requirements, edit = false} : {notes?: string, description?: string, requirements?: string, edit?: boolean}) {
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
                {!edit && tab == 'notes' && notes && (<TailwindMarkdown>{notes}</TailwindMarkdown>)}
                {!edit && tab == 'description' && description && (<TailwindMarkdown>{description}</TailwindMarkdown>)}
                {!edit && tab == 'requirements' && requirements && (<TailwindMarkdown>{requirements}</TailwindMarkdown>)}
                {edit && (<TextField id='notes' title='' value={notes} className={tab == 'notes' ? 'block' : 'hidden'} />)}
                {edit && (<TextField id='description' title='' value={description} className={tab == 'description' ? 'block' : 'hidden'} />)}
                {edit && (<TextField id='requirements' title='' value={requirements} className={tab == 'requirements' ? 'block' : 'hidden'} />)}
            </div>
        </div>
    )
}