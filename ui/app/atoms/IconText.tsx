import React from 'react';
import Text from './Text';
import NextImage from 'next/image';

interface IconTextProps {
  variant: 'body' | 'bodySmall' | 'caption' | 'mini';
  textColor?: string;
  fontWeight?: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  alt: string;
  label: string;
  className?: string;
  iconPosition?: 'left' | 'right';
}

const IconText: React.FC<IconTextProps> = ({
  variant,
  textColor,
  fontWeight,
  iconSrc,
  iconWidth,
  iconHeight,
  alt,
  label,
  className = '',
  iconPosition = 'left',
}) => {
  const flexDirectionClass = iconPosition === 'right' ? 'flex-row-reverse' : '';

  return (
    <div className={`flex items-center gap-x-2 ${flexDirectionClass} ${className}`}>
      <Text variant={variant} textColor={textColor} fontWeight={fontWeight}>
        {label}
      </Text>
      <NextImage src={iconSrc} width={iconWidth} height={iconHeight} alt={alt} />
    </div>
  );
};

export default IconText;
