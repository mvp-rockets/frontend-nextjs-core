import React from 'react';
import Text from './Text';

interface ProgressBarProps {
  shape?: 'rounded' | 'soft' | 'sharp';
  size?: 'large' | 'small';
  value: number;
  label?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  shape = 'rounded',
  size = 'large',
  value,
  label,
}) => {
  const shapeVariant = {
    rounded: 'rounded-full',
    soft: 'rounded',
    sharp: 'rounded-none',
  };

  const sizeVariant = {
    large: 'h-4',
    small: 'h-2',
  };

  return (
    <>
      {label && (
        <div className="flex justify-between mb-2">
          <Text variant="bodySmall" textColor="text-neutral-800">
            {label}
          </Text>
          <Text variant="bodySmall" textColor="text-neutral-800">
            {value}%
          </Text>
        </div>
      )}
      <div className={`bg-secondary-600 ${shapeVariant[shape]} ${sizeVariant[size]}`}>
        <div
          className={`h-full bg-primary-900 ${shapeVariant[shape]}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </>
  );
};

export default ProgressBar;