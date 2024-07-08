import { TimeLine } from '@/app/molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'molecules/Timeline',
  component: TimeLine,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof TimeLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   type: 'dot',
   timelineList: [
        {
            title: 'Title',
            date: '2020-01-01',
            description: 'description',
            id: 1,
        },
        {
            title: 'Title',
            date: '2020-01-01',
            description: 'description',
            id: 2,
        },
        {
            title: 'Title',
            date: '2020-01-01',
            description: 'description',
            id: 3,
        },
   ]
  },
};
