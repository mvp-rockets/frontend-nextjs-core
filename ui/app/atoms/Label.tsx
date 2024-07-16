import React from 'react';
import classNames from 'classnames';

interface LabelProps {
  id: string;
  labelFor: string;
  textColor?: string;
  className?: string;
  variant?: 'small' | 'medium' | 'large' | 'extraSmall';
  disabled?: boolean;
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({
  id,
  labelFor,
  variant = 'medium',
  textColor = 'text-black',
  className = '',
  disabled = false,
  children,
}) => {
  const LabelStyle = {
    extraSmall: 'text-xs',
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  return (
    <label
      id={id}
      htmlFor={labelFor}
      className={classNames(
        textColor,
        className,
        LabelStyle[variant],
        { 'opacity-60 pointer-events-none': disabled }
      )}
    >
      {children}
    </label>
  );
};

export default Label;