import '../globals.css';
import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './textInput';

const meta: Meta<typeof TextInput> = {
    title: 'Inputs/Text',
    component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
    args: {
        title: "Name",
        placeholder: "John Doe"
    },
    argTypes: {
        id: { control: false, table: { disable: true } },
    }
};