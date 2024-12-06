import '../globals.css';
import type { Meta, StoryObj } from '@storybook/react';
import NumberInput from './numberInput';

const meta: Meta<typeof NumberInput> = {
    title: 'Inputs/Number',
    component: NumberInput,
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Primary: Story = {
    args: {
        title: "Salary",
        placeholder: "100000",
        suffix: "CHF"
    },
    argTypes: {
        id: { control: false, table: { disable: true } },
    }
};