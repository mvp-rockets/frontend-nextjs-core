import { AnimatedInputLabel } from '@/app/molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'molecules/AnimatedInputLabel',
  component: AnimatedInputLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof AnimatedInputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   labelText: 'Enter name',
   name: 'animatedInputLabel',
  },
};
