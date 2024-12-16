import '../globals.css';
import type { Meta, StoryObj } from '@storybook/react';

import Process from './process';
import Node from './node';
import Edge from './edge';

const meta: Meta<typeof Process> = {
    title: 'Process',
    component: Process,
    subcomponents: { Node, Edge },
};

export default meta;
type Story = StoryObj<typeof Process>;

export const Primary: Story = {
    args: {
        position: {
            id: 0,
            bk: '0',
            title: 'Job Title',
            degree: null,
            begin: null,
            duration: null,
            notes: null,
            salary: 100_000,
            state: 3,
            company: 'Company',
            requirements: null,
            description: null,
            valid_from: new Date(),
            valid_to: null,
            deleted_at: null
        }
    }
};

export const FirstState: Story = {
    args: {
        position: {
            id: 0,
            bk: '0',
            title: 'Job Title',
            degree: null,
            begin: null,
            duration: null,
            notes: null,
            salary: 100_000,
            state: 0,
            company: 'Company',
            requirements: null,
            description: null,
            valid_from: new Date(),
            valid_to: null,
            deleted_at: null
        },
    }
};

export const Denied: Story = {
    args: {
        position: {
            id: 0,
            bk: '0',
            title: 'Job Title',
            degree: null,
            begin: null,
            duration: null,
            notes: null,
            salary: 100_000,
            state: 5,
            company: 'Company',
            requirements: null,
            description: null,
            valid_from: new Date(),
            valid_to: null,
            deleted_at: null
        },
    }
};
