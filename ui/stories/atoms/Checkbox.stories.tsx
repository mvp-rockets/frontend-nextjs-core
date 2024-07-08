import type { Meta, StoryObj } from '@storybook/react';
import  Checkbox from '@/app/atoms/Checkbox';

const meta = {
  title: 'atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   id: 'id-checkbox',
   label: 'Check',

  },
};

