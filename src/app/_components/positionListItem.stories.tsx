import '../globals.css';
import type { Meta, StoryObj } from '@storybook/react';
import PositionListItem from './positionListItem';

const meta: Meta<typeof PositionListItem> = {
    title: 'Position List',
    component: PositionListItem,
};

export default meta;
type Story = StoryObj<typeof PositionListItem>;

export const Primary: Story = {
    args: {
        title: "Data Scientist",
        company: "Google Inc.",
        salary: 100000
    },
    render: (args) => (
        <ul className="divide-y divide-gray-100">
            <PositionListItem {...args} />
            <PositionListItem {...args} />
            <PositionListItem {...args} />
        </ul>
    )
};

export const Loading: Story = {
    args: {
        title: undefined,
        company: undefined,
        salary: undefined
    },
    render: Primary.render
};