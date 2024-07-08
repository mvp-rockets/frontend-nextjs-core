import React from 'react';
import classNames from 'classnames';
import NextImage from 'next/image';

interface TagsProps {
    shape?: 'rounded' | 'soft' | 'sharpe';
    variant?: 'primary' | 'error' | 'success' | 'warning' | 'neutral';
    size?: 'medium' | 'normal' | 'small';
    label?: string;
    iconSrc?: string;
    iconPosition?: 'left' | 'right';
    className?: string;
    iconWidth?: number;
    iconHeight?: number;
    isLight?: boolean;
    onClick?: () => void;
}

const Tags: React.FC<TagsProps> = ({
    shape = 'rounded',
    variant = 'primary',
    size = 'medium',
    label,
    iconSrc,
    iconPosition,
    className,
    iconWidth = 24,
    iconHeight = 24,
    isLight = false,
    onClick = () => {},
    ...rest
}) => {
    const shapeVariant = {
        rounded: 'rounded',
        soft: 'rounded',
        sharpe: 'rounded-none',
    };

    const tagsVariant = {
        primary: isLight ? 'bg-basic-white text-primary-900' : 'bg-primary-900 text-basic-white',
        error: isLight ? 'bg-error-50 text-error-100' : 'bg-error-100 text-basic-white',
        warning: isLight ? 'bg-warning-50 text-warning-100' : 'bg-warning-100 text-basic-white',
        success: isLight ? 'bg-success-50 text-success-100' : 'bg-success-100 text-basic-white',
        neutral: isLight ? 'bg-basic-white text-neutral-900' : 'bg-neutral-900 text-basic-white',
    };

    const tagsSizes = {
        medium: 'py-2 px-6 text-base',
        normal: 'py-1.5 px-[16px] text-sm',
        small: 'py-1 px-2 text-xs',
    };

    return (
        <div
            className={classNames(
                shapeVariant[shape],
                tagsSizes[size],
                tagsVariant[variant],
                className,
                {
                    'flex items-center gap-x-2 cursor-pointer': iconSrc,
                    'flex-row-reverse': iconPosition === 'left',
                },
                'w-fit'
            )}
            onClick={onClick}
            {...rest}
        >
            {label}
            {iconSrc && <NextImage src={iconSrc} alt="icon" width={iconWidth} height={iconHeight} />}
        </div>
    );
};

export default Tags;