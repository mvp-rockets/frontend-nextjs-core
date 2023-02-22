import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

const Icon = ({ className = "cursor-pointer", iconSrc = "/images/icons/home.svg", iconWidth = "20", iconHeight = "20", iconAlt = "Icon" }) => {
    return <Image src={iconSrc} width={iconWidth} height={iconHeight} alt={iconAlt} className={className} />;
};

export default Icon;

Icon.propTypes = {
    className: PropTypes.string,
    iconSrc: PropTypes.string,
    iconWidth: PropTypes.number,
    iconHeight: PropTypes.number,
    iconAlt: PropTypes.string,
};
