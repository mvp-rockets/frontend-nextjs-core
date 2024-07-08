import type { Meta, StoryObj } from '@storybook/react';
import  SubMenu from '@/app/atoms/SubMenu';

const meta = {
  title: 'atoms/SubMenu',
  component: SubMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof SubMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    lists: [
        {
            id: 1,
            name: 'Home',
        },
        {
            id: 2,
            name: 'Our Services',
            subMenuItems: [{
                id: 1,
                name: 'Website Development'
            },{
                id: 2,
                name: 'Mobile App Development'
            }]
        },
        {
            id: 1,
            name: 'Contact us',
        },

    ] 
  }
};

