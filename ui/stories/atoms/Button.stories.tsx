import type { Meta, StoryObj } from '@storybook/react';
import  Button from '@/app/atoms/Button';

const meta = {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'button',
    children : 'Button',
    id: 'btnPrimary',
    variant: 'normal',
  },
};

