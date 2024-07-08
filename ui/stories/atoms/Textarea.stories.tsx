import type { Meta, StoryObj } from '@storybook/react';
import  Textarea from '@/app/atoms/Textarea';

const meta = {
  title: 'atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   id: 'textarea',
   name: 'Textarea',
   placeholder: 'enter the details here',
   
  },
};

