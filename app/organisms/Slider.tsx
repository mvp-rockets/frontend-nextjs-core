import NextImage from 'next/image';
import React, { useRef } from 'react';
import 'swiper/css';
import { A11y, Grid, Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperRef } from 'swiper/react';

interface SliderProps {
  loop?: boolean;
  slidesPerView?: number;
  slidesPerGroup?: number;
  spaceBetween?: number;
  rows?: number;
  breakpoints?: Record<string, any>;
  mousewheel?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({
  loop = true,
  slidesPerView = 1,
  slidesPerGroup = 1,
  spaceBetween = 0,
  rows,
  breakpoints,
  mousewheel = false,
  children,
  className,
}) => {
  const swiperRef = useRef<SwiperRef>(null);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className={`relative max-w-[900px] w-full ${className || ''}`}>
      <span className='absolute transform top-1/2 -translate-y-1/2 cursor-pointer z-10' onClick={goToPrevSlide}>
        <NextImage
          src="/images/icons/angle-left.svg"
          width={40}
          height={40}
          alt='angle left'
        />
      </span>
      <Swiper
        ref={swiperRef}
        slidesPerGroup={slidesPerGroup}
        loop={loop}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        grid={{ rows: rows, fill: "row" }}
        modules={[Grid, Navigation, Mousewheel, Scrollbar, Pagination, A11y]}
        breakpoints={breakpoints}
        mousewheel={mousewheel}
        className="mySwiper"
      >
        {children}
      </Swiper>
      <span className='absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10' onClick={goToNextSlide}>
        <NextImage
          src="/images/icons/angle-right.svg"
          width={40}
          height={40}
          alt='angle left'
        />
      </span>
    </div>
  );
}

export default Slider;
