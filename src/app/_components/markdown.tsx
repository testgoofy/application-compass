import Markdown from 'react-markdown'

export default function TailwindMarkdown({children}: {children: string}) {
    return (
        <Markdown components={{
            h1: ({ node, ...props }) => (<p className="text-2xl font-bold pt-2" {...props} />),
            h2: ({ node, ...props }) => (<p className="text-xl font-bold pt-2" {...props} />),
            h3: ({ node, ...props }) => (<p className="text-lg font-semibold pt-2" {...props} />),
            h4: ({ node, ...props }) => (<p className="text-base font-semibold pt-2" {...props} />),
            h5: ({ node, ...props }) => (<p className="text-base font-semibold pt-2" {...props} />),
            h6: ({ node, ...props }) => (<p className="text-base font-semibold pt-2" {...props} />),
            ul: ({ node, ...props }) => (<ul className="list-disc ps-5" {...props} />),
            ol: ({ node, ...props }) => (<ol className="list-decimal ps-5" {...props} />),
            blockquote: ({ node, ...props }) => (<blockquote className="border-l-4 ps-5" {...props} />),
            a: ({ node, ...props }) => (<a className="text-blue-700 underline" {...props} />),
            code: ({ node, ...props }) => (<code className="bg-gray-200 rounded py-0.5 px-1" {...props} />),
        }}>
            {children}
        </Markdown>
    )
}