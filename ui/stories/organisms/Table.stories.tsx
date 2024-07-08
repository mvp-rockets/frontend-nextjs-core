import type { Meta, StoryObj } from '@storybook/react';
import Table from '@/app/organisms/Table';

const meta = {
  title: 'organisms/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   headers: [
    {
        id: 'id',
        label: 'ID',
        type: 'string',
        checked: false
    },
    {
        id: 'name',
        label: 'Name',
        type: 'string',
        checked: false
    }
   ],
   tableData: [
    {
        name: 'name',
        avatarBgColor: 'bg-primary-100',
        avatarText: 'avatarText',
        avatarTextColor: 'text-primary-900',
        text: 'text',
        iconSrc: '/images/icons/plus.svg',
        tagLabel: 'tag',
        tagVariant: 'success'
    },
    {
        name: 'name',
        avatarBgColor: 'bg-primary-100',
        avatarText: 'avatar',
        avatarTextColor: 'text-primary-900',
        text: 'text',
        iconSrc: '/images/icons/plus.svg',
        tagLabel: 'tag',
        tagVariant: 'success'
    }
   ]
  },
};
