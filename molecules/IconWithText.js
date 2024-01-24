import React from 'react'
import PropTypes from 'prop-types'
import Text from '../atoms/Text'
import Image from 'next/image'

const IconWithText = ({
    className = "gap-1.5 cursor-pointer",
    isActive = false,
    iconSrc,
    activeIconSrc,
    iconWidth = "24",
    iconHeight = "24",
    iconAlt = "icon",
    variant = "caption",
    textColor = "text-neutral-500",
    title,
    onClick = () => { }
}) => {
    return (
        <div className={`flex items-center ${className}`} onClick={onClick}>
            <Image src={`${isActive ? activeIconSrc : iconSrc}`} width={iconWidth} height={iconHeight} alt={iconAlt} className={className} />
            <Text variant={variant} textColor={textColor} children={title} />
        </div>
    )
}

IconWithText.propTypes = {
    time: PropTypes.string,
    likeNum: PropTypes.string,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    iconSrc: PropTypes.string,
    activeIconSrc: PropTypes.string,
    iconWidth: PropTypes.number,
    iconHeight: PropTypes.number,
    iconAlt: PropTypes.string,
    variant: PropTypes.string,
    textColor: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
}

export default IconWithText
