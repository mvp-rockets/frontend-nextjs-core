import React, { MouseEvent } from 'react';
import NextImage from 'next/image';
import { Button, Text,  } from '../atoms';


interface CardProps {
  className?: string;
  showButton?: boolean;
  classNameForImageContainer?: string;
  imgSrc?: string;
  padding?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  title?: string;
  text?: string;
}

const Card: React.FC<CardProps> = ({
  className,
  showButton,
  classNameForImageContainer,
  imgSrc,
  padding,
  onClick = (e) => { },
  title,
  text,
}) => {
  return (
    <div className={`shadow-md max-w-[288px] w-full cursor-pointer ${padding || 'p-4'} ${className || ''}`} onClick={onClick}>
      {imgSrc &&
        <div className={`relative ${classNameForImageContainer}`}>
          <NextImage
            src={imgSrc}
            alt='card'
            layout='fill'
            objectFit='cover'
          />
        </div>
      }
      <div>
        <Text
          variant='bodySmall'
          textColor="text-basic-black"
          fontWeight='font-bold'
        >{title}</Text>
        <Text
          variant='bodySmall'
          textColor="text-[#999CA0]"
        >
          {text}
        </Text>
      </div>

      {
        showButton &&
        <Button
          className=""
          fontWeight="font-semibold"
          id="primary-button"
          label="Button"
          name="primary-button"
          onClick={onClick}
          size="small"
          type="button"
          variant="normal"
        />
      }
    </div>
  );
}

export default Card;
