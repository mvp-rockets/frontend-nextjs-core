import React from 'react';
import Label from './Label';

interface DividerProps {
  id: string;
  className?: string;
  text?: string;
  position?: 'center' | 'left' | 'right';
}

const Divider: React.FC<DividerProps> = ({ id, className, text, position = 'center' }) => {
  const variant = {
    center: 'left-1/2 -translate-x-1/2',
    left: 'left-[10%]',
    right: 'right-[10%]',
  };

  return (
    <div className={`bg-secondary-600 h-[1px] relative select-none w-[500px] ${className || ''}`}>
      {text && (
        <Label
          id={id}
          labelFor="divider"
          variant="medium"
          textColor="text-neutral-900"
          className={`bg-basic-white absolute px-2 -top-3 ${variant[position]}`}
        >
          {text}
        </Label>
      )}
    </div>
  );
};

export default Divider;