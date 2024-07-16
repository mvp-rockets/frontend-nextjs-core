import type { Meta, StoryObj } from '@storybook/react';
import  { Alert } from '@/app/atoms';

const meta = {
  title: 'atoms/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'success',
    label : 'This is an alert',
  },
};

export const Info: Story = {
    args: {
      variant: 'info',
      label : 'This is an alert',
    },
  };

