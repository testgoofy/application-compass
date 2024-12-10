import '../globals.css';
import type { Meta, StoryObj } from '@storybook/react';
import PositionList from './positionList';
import type { Position } from '@prisma/client'

const meta: Meta<typeof PositionList> = {
    title: 'Position List',
    component: PositionList,
};

export default meta;
type Story = StoryObj<typeof PositionList>;

export const Primary: Story = {
    args: {
        positions: [
            {
                id: 0,
                bk: '0',
                title: 'Job Title',
                salary: 100_000,
                status: 'First step',
                company: 'Company',
                requirements: null,
                description: null,
                valid_from: new Date(),
                valid_to: null,
                deleted_at: null
            },
            {
                id: 1,
                bk: '1',
                title: 'Job Title',
                salary: 100_000,
                status: 'First step',
                company: 'Company',
                requirements: null,
                description: null,
                valid_from: new Date(),
                valid_to: null,
                deleted_at: null
            },
            {
                id: 2,
                bk: '2',
                title: 'Job Title',
                salary: null,
                status: 'First step',
                company: 'Company',
                requirements: null,
                description: null,
                valid_from: new Date(),
                valid_to: null,
                deleted_at: null
            }
        ]
    }
};

export const NoSalary: Story = {
    args: {
        positions: [
            {
                id: 0,
                bk: '0',
                title: 'Job Title',
                salary: null,
                status: 'First step',
                company: 'Company',
                requirements: null,
                description: null,
                valid_from: new Date(),
                valid_to: null,
                deleted_at: null
            },
            {
                id: 1,
                bk: '1',
                title: 'Job Title',
                salary: null,
                status: 'First step',
                company: 'Company',
                requirements: null,
                description: null,
                valid_from: new Date(),
                valid_to: null,
                deleted_at: null
            },
            {
                id: 2,
                bk: '2',
                title: 'Job Title',
                salary: null,
                status: 'First step',
                company: 'Company',
                requirements: null,
                description: null,
                valid_from: new Date(),
                valid_to: null,
                deleted_at: null
            }
        ]
    }
};

export const Empty: Story = {
    args: {
        positions: []
    }
};