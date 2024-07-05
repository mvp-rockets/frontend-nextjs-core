import { FileUpload } from '@/app/molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'atoms/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   accept: 'application',
   multiple: true,
  },
};

