import React from 'react';
import NextImage from 'next/image';
import classNames from 'classnames';

interface AvatarProps {
  avatarShape?: 'small' | 'normal' | 'square' | 'circle';
  avatarSize?: 'normal' | 'small' | 'extraSmall' | 'large';
  onClick?: () => void;
  textSize?: 'large' | 'body' | 'bodySmall' | 'caption';
  text?: string;
  bgColor?: string;
  fill?: boolean;
  imgHeight?: number;
  imgWidth?: number;
  imgSrc?: string;
  badgeType?: 'dot' | 'number';
  badgeSize?: 'normal' | 'small';
  value?: number | string;
  className?: string;
  textColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  avatarShape = 'small',
  avatarSize = 'normal',
  onClick,
  textSize = 'body',
  text,
  bgColor = 'bg-primary-300',
  fill,
  imgHeight = 32,
  imgWidth = 32,
  imgSrc,
  badgeType,
  badgeSize = 'normal',
  value,
  className,
  textColor = 'text-primary-900',
}) => {
  const shapeClasses = {
    small: 'rounded-[2px]',
    normal: 'rounded-none',
    square: 'rounded-lg',
    circle: 'rounded-full',
  };

  const sizeClasses = {
    normal: 'w-10 h-10',
    small: 'w-8 h-8',
    extraSmall: 'w-6 h-6',
    large: 'w-16 h-16',
  };

  const fontSizeClasses = {
    large: 'text-lg',
    body: 'text-base',
    bodySmall: 'text-sm',
    caption: 'text-xs',
  };

  const badgeDimensionClasses = {
    normal: 'w-[30px] h-5',
    small: 'w-[26px] h-4',
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className={classNames(
          shapeClasses[avatarShape],
          sizeClasses[avatarSize],
          bgColor,
          'relative flex items-center justify-center overflow-hidden',
          onClick && 'cursor-pointer'
        )}
        onClick={onClick}
      >
        {imgSrc && (
          <NextImage
            src={imgSrc}
            alt="avatar"
            width={fill ? undefined : imgWidth}
            height={fill ? undefined : imgHeight}
            layout={fill ? 'fill' : 'fixed'}
          />
        )}
        {text && (
          <span className={`${textColor} ${fontSizeClasses[textSize]}`}>
            {text}
          </span>
        )}
      </div>
      {badgeType === 'dot' && (
        <div className="bg-error-100 w-1.5 h-1.5 rounded-full absolute top-0 right-0 shadow-xs"></div>
      )}
      {badgeType === 'number' && (
        <div
          className={classNames(
            'bg-error-100 rounded-full absolute -top-2 -right-3 flex items-center justify-center text-basic-white text-xs shadow-xs',
            badgeDimensionClasses[badgeSize]
          )}
        >
          {value}
        </div>
      )}
    </div>
  );
};

export default Avatar;