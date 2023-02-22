import classnames from "classnames";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

const IconBadge = ({
  style = badgeStyle.primary,
  className = "",
  children = "",
  iconSrc = "/images/icons/notification.svg",
  iconWidth = "20",
  iconHeight = "20",
  iconAlt = "Icon",
}) => {
  const badgeStyle = {
    primary: "primary",
    secondary: "secondary",
    ghostPrimary: "ghostPrimary",
    ghostSecondary: "ghostSecondary",
  };
  return (
    <div className="relative inline-block">
      <Image
        src={iconSrc}
        width={iconWidth}
        height={iconHeight}
        alt={iconAlt}
      />
      <div
        className={classnames(
          [className],
          "flex items-center justify-center absolute rounded-full w-4 h-4 text-xs font-medium -top-1.5 -right-1.5",
          {
            "bg-primary-900 text-white": style === badgeStyle.primary,
            "bg-secondary-900 text-white": style === badgeStyle.secondary,
            "bg-white text-primary-900": style === badgeStyle.ghostPrimary,
            "bg-white text-secondary-900": style === badgeStyle.ghostSecondary,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default IconBadge;

IconBadge.propTypes = {
  style: PropTypes.array,
  children: PropTypes.string,
  className: PropTypes.string,
  iconSrc: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  iconAlt: PropTypes.string,
};
