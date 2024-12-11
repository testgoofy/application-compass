import '../globals.css';
import type { Meta, StoryObj } from '@storybook/react';

import TailwindMarkdown from './markdown';

const meta: Meta<typeof TailwindMarkdown> = {
    title: 'Markdown',
    component: TailwindMarkdown,
};

export default meta;
type Story = StoryObj<typeof TailwindMarkdown>;

export const Primary: Story = {
    args: {
        children: `# Title 1
## Title 2
### Title 3
#### Title 4
##### Title 5
###### Title 6
Text  
*Italic Text*  
**Bold Text**
`
    }
};

export const List: Story = {
    args: {
        children: `List Items
- Item 1
- Item 2
- Item 3
1. Item 1
1. Item 2
1. Item 3
> Blockquote 1  
> Blockquote 2  
> Blockquote 3
`
    }
};

export const Link: Story = {
    args: {
        children: `Some sentence with a [link](#) in it`
    }
};

export const Code: Story = {
    args: {
        children: `Code
Some sentence with \`inline code\`
\`\`\`ts
export default function Hello() {
        return (
            <h1>Hello World</h1>
    )
}
\`\`\`
`
    }
};