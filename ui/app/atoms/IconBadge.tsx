import React from 'react';
import NextImage from 'next/image';

interface IconBadgeProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'ghostNeutral';
  label: number | string;
  className?: string;
  iconSrc?: string;
  [key: string]: any;
}

const IconBadge: React.FC<IconBadgeProps> = ({
  variant = 'primary',
  label,
  className = '',
  iconSrc = '/images/icons/bell.svg',
  ...rest
}) => {
  const badgeStyles = {
    primary: 'bg-primary-900 text-basic-white',
    secondary: 'bg-secondary-900 text-basic-white',
    ghost: 'bg-basic-white text-primary-900',
    ghostNeutral: 'bg-basic-white text-secondary-900',
  };

  return (
    <div className={`relative ${className}`} {...rest}>
      <NextImage src={iconSrc} alt="icon" width={24} height={24} />
      <div className={`w-4 h-4 rounded-full font-medium flex items-center justify-center absolute -top-1 -right-1 text-xs ${badgeStyles[variant]}`}>
        {label}
      </div>
    </div>
  );
};

export default IconBadge;