import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '@/app/molecules/Tooltip';

const meta = {
  title: 'atoms/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tooltip',
    content: 'Tooltip content',
    position: 'bottom',
    tooltipArrowPosition: 'top',
  },
};

