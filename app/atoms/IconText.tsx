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
}) => (
  <div className={`flex items-center gap-x-2 ${className}`}>
    <Text variant={variant} textColor={textColor} fontWeight={fontWeight}>
      {label}
    </Text>
    <NextImage src={iconSrc} width={iconWidth} height={iconHeight} alt={alt} />
  </div>
);

export default IconText;