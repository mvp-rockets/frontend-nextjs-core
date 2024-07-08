import type { Meta, StoryObj } from '@storybook/react';
import  RangeSlider from '@/app/atoms/RangeSlider';

const meta = {
  title: 'atoms/RangeSlider',
  component: RangeSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  }
};

