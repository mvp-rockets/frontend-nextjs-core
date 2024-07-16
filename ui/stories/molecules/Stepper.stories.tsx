import { Stepper } from '@/app/molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'molecules/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: [
        {
            name: 'step1',
            completed: true,
            isActive: false,
            step: 1,
        },
        {
            name: 'step2',
            completed: true,
            isActive: false,
            step: 2,
        },
        {
            name: 'step3',
            completed: false,
            isActive: true,
            step: 3,
        },
        {
            name: 'step4',
            completed: false,
            isActive: false,
            step: 4,
        },
    ],
  },
};
