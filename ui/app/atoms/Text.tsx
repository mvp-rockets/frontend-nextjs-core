import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant: 'body' | 'bodySmall' | 'caption' | 'mini';
  fontSize?: string;
  fontWeight?: string;
  textColor?: string;
  children: ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  variant,
  fontSize,
  fontWeight,
  textColor,
  children,
  className,
  ...rest
}) => {
  const textStyle = {
    body: 'text-base',
    bodySmall: 'text-sm',
    caption: 'text-xs',
    mini: 'text-[0.625rem]',
  };

  return (
    <p
      className={classNames(
        textStyle[variant],
        fontSize,
        fontWeight,
        textColor,
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Text;