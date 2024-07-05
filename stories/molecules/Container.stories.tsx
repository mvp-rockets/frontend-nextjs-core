import { Container } from '@/app/molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'molecules/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   children: 'Container',
  },
};
