import React from 'react';
import NextImage from 'next/image';
import Text from './Text';

interface AlertProps {
  variant: 'info' | 'error' | 'success' | 'warning';
  label: string;
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
  isLight?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  variant,
  label,
  className = '',
  width = 24,
  height = 24,
  alt = 'alert icon',
  isLight = false,
}) => {
  const baseClasses = 'rounded py-[22px] px-[18px] flex items-center gap-x-2 w-full';
  const alertStyles = isLight
    ? {
        info: `${baseClasses} bg-info-50 text-info-100`,
        error: `${baseClasses} bg-error-50 text-error-100`,
        success: `${baseClasses} bg-success-50 text-success-100`,
        warning: `${baseClasses} bg-warning-50 text-warning-100`,
      }
    : {
        info: `${baseClasses} bg-info-100 text-basic-white`,
        error: `${baseClasses} bg-error-100 text-basic-white`,
        success: `${baseClasses} bg-success-100 text-basic-white`,
        warning: `${baseClasses} bg-warning-100 text-basic-black`,
      };

  const alertIcons = {
    info: isLight ? '/images/icons/Info.svg' : '/images/icons/alert-white.svg',
    error: isLight ? '/images/icons/error.svg' : '/images/icons/denied.svg',
    success: isLight ? '/images/icons/tick-green.svg' : '/images/icons/Tick.svg',
    warning: isLight ? '/images/icons/info-circle-yellow.svg' : '/images/icons/Info-circle.svg',
  };

  return (
    <div className={alertStyles[variant]} aria-label={alt}>
      <NextImage src={alertIcons[variant]} alt={alt} width={width} height={height} />
      <Text variant="bodySmall" textColor={isLight ? undefined : 'text-basic-white'} className="text-inherit">
        {label}
      </Text>
    </div>
  );
};

export default Alert;