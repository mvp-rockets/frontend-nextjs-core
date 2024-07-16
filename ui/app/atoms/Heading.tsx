import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontSize?: string;
  textColor?: string;
  fontWeight?: string;
  children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  className,
  fontSize,
  type,
  textColor,
  fontWeight,
  children,
  ...rest
}) => {
  const HeadingStyle = {
    h1: 'text-5xl',
    h2: 'text-4xl',
    h3: 'text-3xl',
    h4: 'text-2xl',
    h5: 'text-xl',
    h6: 'text-lg',
  };

  return React.createElement(
    type,
    {
      className: classNames(
        className,
        textColor,
        fontWeight,
        fontSize || HeadingStyle[type]
      ),
      ...rest,
    },
    children
  );
};

export default Heading;