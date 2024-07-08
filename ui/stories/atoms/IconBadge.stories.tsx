import type { Meta, StoryObj } from '@storybook/react';
import  IconBadge from '@/app/atoms/IconBadge';

const meta = {
  title: 'atoms/IconBadge',
  component: IconBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof IconBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '2',
    variant: 'primary',

  },
};

