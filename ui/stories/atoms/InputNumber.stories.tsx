import type { Meta, StoryObj } from '@storybook/react';
import  InputNumber from '@/app/atoms/InputNumber';

const meta = {
  title: 'atoms/InputNumber',
  component: InputNumber,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   
  },
};
