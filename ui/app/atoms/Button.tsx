import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'normal' | 'ghost' | 'borderless' | 'link';
  size?: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
  iconPosition?: 'right' | 'left';
  icon?: boolean;
  fullWidth?: boolean;
  radius?: string;
  fontWeight?: string;
  label?: string;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  id,
  className,
  label,
  size = 'medium',
  variant = 'normal',
  radius = 'rounded',
  fontWeight = 'font-normal',
  iconPosition,
  icon = false,
  fullWidth = false,
  disabled = false,
  onClick,
  children,
  ...rest
}) => {
  const buttonVariants = {
    normal: 'bg-primary-900 text-basic-white outline-none focus:outline-none hover:bg-primary-800 border border-transparent focus:border-primary-800 disabled:bg-primary-100 disabled:text-primary-300',
    ghost: 'border border-primary-900 bg-basic-white text-primary-900 hover:bg-primary-50 hover:border-primary-800 hover:text-primary-800 focus:border-2 focus:bg-primary-100 disabled:bg-primary-100 disabled:border-none disabled:text-primary-300',
    borderless: 'text-primary-900 hover:bg-primary-100 border-2 border-transparent focus:border-primary-800 focus:bg-primary-100 disabled:bg-primary-100 disabled:text-primary-300',
    link: 'text-primary-900 border-b border-transparent hover:border-primary-800 hover:text-primary-800 focus:text-primary-800 active:text-primary-800 disabled:text-primary-300 disabled:border-primary-300 !rounded-none p-0',
  };

  const buttonSizes = {
    extraSmall: 'text-xs py-1 px-2',
    small: 'text-sm py-2 px-3',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6',
    extraLarge: 'text-xl py-4 px-8',
  };

  return (
    <button
      type={type}
      id={id}
      className={classNames(
        className,
        radius,
        fontWeight,
        disabled ? 'pointer-events-none' : 'cursor-pointer',
        buttonVariants[variant],
        buttonSizes[size],
        fullWidth && 'w-full',
        icon && 'flex gap-x-2 items-center',
        iconPosition === 'left' && 'flex-row-reverse',
        'transition-all ease-linear duration-300',
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {label || children}
    </button>
  );
};

export default Button;
