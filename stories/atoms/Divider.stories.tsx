import type { Meta, StoryObj } from '@storybook/react';
import  Divider from '@/app/atoms/Divider';

const meta = {
  title: 'atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'divider',
    text: 'divider text'
  },
};
