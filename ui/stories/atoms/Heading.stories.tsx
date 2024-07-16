import type { Meta, StoryObj } from '@storybook/react';
import  Heading from '@/app/atoms/Heading';

const meta = {
  title: 'atoms/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children : 'this is a heading atom',
    type: 'h1',
  },
};

export const Heading3: Story = {
    args: {
        type: 'h3',
      children : 'this is a heading atom',
    },
  };

