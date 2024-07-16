import type { Meta, StoryObj } from '@storybook/react';
import  RadioButton from '@/app/atoms/RadioButton';

const meta = {
  title: 'atoms/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   id: 'radioButton',
  }
};

export const disabled: Story = {
    args: {
     id: 'radioButton-disabled',
     defaultChecked: true,
     disabled: true,
    }
  };
