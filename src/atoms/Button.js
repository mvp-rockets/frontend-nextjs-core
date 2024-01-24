import classnames from "classnames";
import Image from "next/image";
import PropTypes from "prop-types";

const buttonStyles = {
  primary:
    "bg-primary-900 hover:bg-primary-800 focus:bg-primary-800 active:bg-primary-800 visited:bg-primary-800",
  ghost:
    "text-primary-900 outline outline-1 outline-primary-800 hover:bg-primary-50 focus:bg-primary-50 focus:outline-2 active:bg-primary-200 visited:bg-primary-200",
  borderLess:
    "text-primary-900 hover:text-primary-800 focus:text-primary-800 hover:bg-primary-100 focus:bg-primary-100 focus:outline focus:outline-primary-800 focus:outline-2 active:bg-primary-200 visited:bg-primary-200",
};

const sizes = {
  extraSmall: "py-2 px-6 text-sm",
  small: "py-3 px-6 text-sm",
  medium: "py-3.5 px-8 text-base",
  large: "py-4 px-8 text-xl",
};

const iconPositions = {
  left: "flex-row-reverse space-x-reverse",
  right: "flex-row",
};

const iconSize = {
  extraSmall: "p-2 ",
  small: "p-2",
  medium: "p-3",
  large: "p-4",
};

function Button({
  icon,
  iconPosition,
  label,
  onClick,
  type,
  style,
  fullWidth,
  className,
  disabled,
  size,
  btnClass,
}) {
  const defaultStyle = buttonStyles[style] || buttonStyles.primary;

  const buttonClasses = classnames(
    "text-white rounded font-semibold disabled:bg-primary-100 disabled:text-primary-300 disabled:outline-none transform transition-transform active:scale-90 duration-300 flex items-center space-x-2",
    defaultStyle,
    fullWidth && "w-full justify-center",
    className,
    btnClass,
    !icon || label ? sizes[size] : iconSize[size],
    {
      [iconPositions[iconPosition]]: iconPosition,
    }
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonClasses}`}
      disabled={disabled}
    >
      {label && (
        <span className={classnames({ [className]: icon })}>{label}</span>
      )}
      {icon && (
        <Image
          src={icon}
          width={size === "extraSmall" ? 16 : 24}
          height={size === "extraSmall" ? 16 : 24}
          alt="icon"
        />
      )}
    </button>
  );
}

Button.propTypes = {
  style: PropTypes.oneOf(Object.keys(buttonStyles)),
  size: PropTypes.oneOf(Object.keys(sizes)),
  iconPosition: PropTypes.oneOf(Object.keys(iconPositions)),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  btnClass: PropTypes.string,
};

Button.defaultProps = {
  icon: null,
  iconPosition: iconPositions.left,
  label: "",
  onClick: () => {},
  type: "button",
  style: "primary",
  fullWidth: false,
  className: "",
  disabled: false,
  size: "medium",
  btnClass: "",
};

export default Button;
