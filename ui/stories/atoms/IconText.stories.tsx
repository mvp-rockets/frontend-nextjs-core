import type { Meta, StoryObj } from '@storybook/react';
import  IconText from '@/app/atoms/IconText';

const meta = {
  title: 'atoms/IconText',
  component: IconText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof IconText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   label: 'icon-badge',
   variant: 'body',
   iconSrc: '/images/icons/bell.svg',
   iconWidth: 20,
   iconHeight: 20,
   alt: 'icon-badge',
  },
};

