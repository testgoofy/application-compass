import '../globals.css';
import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'Inputs/Dropdown',
    component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
    args: {
        title: "Name",
        options: ["Option 1", "Option 2", "Option 3"],
        value: "Option 1"
    },
    argTypes: {
        id: { control: false, table: { disable: true } },
    }
};