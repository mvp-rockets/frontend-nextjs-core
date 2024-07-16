import type { Meta, StoryObj } from '@storybook/react';
import  ProgressBar from '@/app/atoms/ProgressBar';

const meta = {
  title: 'atoms/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 20,
    label: 'Progress',
    shape: 'rounded',
    size: 'large'
  }
};
