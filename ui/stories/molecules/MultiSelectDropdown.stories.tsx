import { MultiSelectDropdown } from '@/app/molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'molecules/MultiSelectDropdown',
  component: MultiSelectDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof MultiSelectDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   options: [
        {label: 'Red', value: 'red'}, 
        {label: 'Green', value: 'green'}, 
        {label: 'Blue', value: 'blue'}
    ],
  },
};
