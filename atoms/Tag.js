import React from "react";
import PropTypes from "prop-types";
import IcomoonIcon from "./IcomoonIcon";
import classnames from "classnames";

const tagStyles = {
  primary: "primary",
  extendedPalette: "extendedPalette",
  neutral: "neutral",
  light: "light",
  border: "border",
  borderLess: "borderLess",
};

const sizes = {
  small: "small",
  default: "default",
  medium: "medium",
};

const shapes = {
  rounded: "rounded",
  soft: "soft",
  sharp: "sharp",
};

const iconPositions = { left: "left", right: "right" };

const Tag = ({
  style = tagStyles.primary,
  size = sizes.default,
  shape = shapes.rounded,
  iconPosition = iconPositions.right,
  title = "",
  className = "",
  icon = true,
  onClick = () => { }
}) => {
  return (
    <div
      className={classnames(
        [className],
        "relative inline-flex items-center", `${className}`,
        {
          "bg-primary-900 text-white fill-white": style === tagStyles.primary,
          "bg-error-100 text-white fill-white": style === tagStyles.extendedPalette,
          "bg-neutral-900 text-white fill-white": style === tagStyles.neutral,
          "bg-white text-neutral-800 fill-neutral-800": style === tagStyles.light,
          "text-neutral-400 border border-neutral-200": style === tagStyles.border,
          "text-primary-900 fill-primary-900": style === tagStyles.borderLess,
          "px-6 py-2 text-base": size === sizes.medium,
          "px-4 py-1.5 text-sm": size === sizes.default,
          "px-2 py-1 text-xs": size === sizes.small,
          "rounded-full": shape === shapes.rounded,
          "rounded": shape === shapes.soft,
          "flex-row-reverse space-x-reverse space-x-2": iconPosition == iconPositions.left,
          "flex-row space-x-2": iconPosition == iconPositions.right,
        }
      )}>
      <span className="font-medium">
        {title}
      </span>
      {icon &&
        <IcomoonIcon
          icon="close-b"
          size="12"
          onClick={onClick}
          className="cursor-pointer"
        />}
    </div>
  );
};

export default Tag;

Tag.propTypes = {
  style: PropTypes.oneOf(Object.values(tagStyles)),
  size: PropTypes.oneOf(Object.values(sizes)),
  iconPosition: PropTypes.oneOf(Object.values(iconPositions)),
  title: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.bool,
  onClick: PropTypes.func,
};