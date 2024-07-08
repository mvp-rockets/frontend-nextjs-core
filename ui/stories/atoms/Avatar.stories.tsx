import type { Meta, StoryObj } from '@storybook/react';
import  Avatar from '@/app/atoms/Avatar';

const meta = {
  title: 'atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   imgSrc: '/images/person.svg',
   fill: true
  },
};
