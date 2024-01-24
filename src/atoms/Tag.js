import classnames from "classnames";
import PropTypes from "prop-types";
import Icon from "./Icon";

const tagStyles = {
  primary: "bg-primary-900 text-white fill-white",
  extendedPalette: "bg-error-100 text-white fill-white",
  neutral: "bg-neutral-900 text-white fill-white",
  light: "bg-white text-neutral-800 fill-neutral-800",
  border: "text-neutral-400 border border-neutral-200",
  borderLess: "text-primary-900 fill-primary-900",
};

const sizes = {
  small: "px-2 py-1 text-xs",
  default: "px-4 py-1.5 text-sm",
  medium: "px-6 py-2 text-base",
};

const shapes = {
  rounded: "rounded-full",
  soft: "rounded",
  sharp: "sharp",
};

const iconPositions = {
  left: "flex-row-reverse space-x-reverse space-x-2",
  right: "flex-row space-x-2",
};

const Tag = ({
  style,
  size,
  shape,
  iconPosition,
  title,
  icon,
  onClick,
  iconSrc,
  iconWidth,
  iconHeight,
  iconAlt,
}) => {
  return (
    <div
      className={classnames(
        "cursor-pointer relative inline-flex items-center",
        tagStyles[style],
        sizes[size],
        shapes[shape],
        iconPositions[iconPosition]
      )}
      onClick={onClick}
    >
      <span className="font-medium">{title}</span>
      {icon && (
        <Icon
          iconSrc={iconSrc}
          iconWidth={iconWidth}
          iconHeight={iconHeight}
          iconAlt={iconAlt}
        />
      )}
    </div>
  );
};

Tag.defaultProps = {
  iconSrc: "/images/icons/closeIcon.svg",
  style: "primary",
  size: "default",
  shape: "rounded",
  iconPosition: "right",
  title: "",
  className: "",
  icon: true,
  onClick: () => {},
  iconWidth: "13",
  iconHeight: "13",
  iconAlt: "",
};

Tag.propTypes = {
  style: PropTypes.oneOf([
    "primary",
    "extendedPalette",
    "neutral",
    "light",
    "border",
    "borderLess",
  ]),
  size: PropTypes.oneOf(["small", "default", "medium"]),
  shape: PropTypes.oneOf(["rounded", "soft", "sharp"]),
  iconPosition: PropTypes.oneOf(["left", "right"]),
  title: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.bool,
  onClick: PropTypes.func,
  iconSrc: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  iconAlt: PropTypes.string,
};
export default Tag;
