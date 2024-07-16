import { Pagination } from '@/app/molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'molecules/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   selectedPage: 3,
   setSelectedPage: () =>{},
   totalPages: 10,

  },
};
