import { AvatarGroup } from '@/app/molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'molecules/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatarLists: [
        {
            id: 1,
            imgSrc: 'https://picsum.photos/200/300',
        },
        {
            id: 2,
            imgSrc: 'https://picsum.photos/200/300',
        },
        {
            id: 3,
            imgSrc: 'https://picsum.photos/200/300',
        },
    ]
  },
};
