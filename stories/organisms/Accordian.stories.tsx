import type { Meta, StoryObj } from '@storybook/react';
import Accordian from '@/app/organisms/Accordian';

const meta = {
  title: 'organisms/Accordian',
  component: Accordian,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Accordian>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accordionList: [
        {
            id: 1,
            title: 'Title 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco rum.',
        },
        {
            id: 2,
            title: 'Title 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco rum.',
        },

    ]
  },
};
