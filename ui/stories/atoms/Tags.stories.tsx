import type { Meta, StoryObj } from '@storybook/react';
import  Tags from '@/app/atoms/Tags';

const meta = {
  title: 'atoms/Tags',
  component: Tags,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Tags>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   label: 'tag',
   variant: 'primary',
  }
};

export const withIcon: Story = {
    args: {
     label: 'tag',
     variant: 'primary',
     iconSrc: '/images/icons/plus.svg',
     iconWidth: 18,
     iconHeight: 18,
     size: 'normal'
    }
  };
  
