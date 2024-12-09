import '../globals.css';
import type { Meta, StoryObj } from '@storybook/react';
import TextField from './textArea';

const meta: Meta<typeof TextField> = {
    title: 'Inputs/TextField',
    component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
    args: {
        title: "Name",
    },
    argTypes: {
        id: { control: false, table: { disable: true } },
    }
};