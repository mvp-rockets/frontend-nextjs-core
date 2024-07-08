import type { Meta, StoryObj } from '@storybook/react';
import  Switch from '@/app/atoms/Switch';

const meta = {
  title: 'atoms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'switch-id',
    name:'Swtich'
  }
};

