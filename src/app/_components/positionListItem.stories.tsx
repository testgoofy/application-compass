import '../globals.css';
import type { Meta, StoryObj } from '@storybook/react';
import PositionListItem from './positionListItem';

const meta: Meta<typeof PositionListItem> = {
    title: 'Position List Item',
    component: PositionListItem,
};

export default meta;
type Story = StoryObj<typeof PositionListItem>;

export const Primary: Story = {
    args: {
        title: "Data Scientist",
        company: "Google Inc.",
        salary: 100000
    }
};

export const Loading: Story = {
    args: {
        title: undefined,
        company: undefined,
        salary: undefined
    }
};