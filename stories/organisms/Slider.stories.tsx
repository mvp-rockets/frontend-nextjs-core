import type { Meta, StoryObj } from '@storybook/react';
import Slider from '@/app/organisms/Slider';
import { SwiperSlide } from 'swiper/react';

const meta = {
  title: 'organisms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;


const slideArray = Array.from({ length: 10 }, (_, index) => index + 1);
export const Default: Story = {
    args: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 50,
        mousewheel: true,
        breakpoints: {
            1: {
                slidesPerView: 1.15,
            },
            640: {
                slidesPerView: 1.15,
            },
            768: {
                slidesPerView: 1.75,
            },
            1024: {
                slidesPerView: 2.15,
            },
            1200: {
                slidesPerView: 3.15,
            },
        },
        children: slideArray.map((slideNumber) => (
            <SwiperSlide key={slideNumber}>
                <div className='h-[500px] w-full relative bg-red-400 flex justify-center items-center text-2xl'>
                    {slideNumber}
                </div>
            </SwiperSlide>
        ))
    },
};

