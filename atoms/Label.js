import PropTypes from "prop-types";

const Label = ({
  labelFor,
  variant,
  textColor,
  fontWeight,
  className,
  children,
  labelDisable,
}) => {
  const LabelStyle = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <label
      htmlFor={labelFor}
      className={`${
        LabelStyle[variant]
      } ${textColor} ${fontWeight} ${className} ${
        labelDisable ? "opacity-60 pointer-events-none" : ""
      }`}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  labelFor: PropTypes.string,
  variant: PropTypes.oneOf(["small", "medium", "large"]),
  textColor: PropTypes.string,
  fontWeight: PropTypes.oneOf([
    "font-thin",
    "font-hairline",
    "font-extralight",
    "font-light",
    "font-normal",
    "font-medium",
    "font-semibold",
    "font-bold",
    "font-extrabold",
    "font-black",
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
  labelDisable: PropTypes.bool,
};

Label.defaultProps = {
  labelFor: "",
  variant: "medium",
  textColor: "text-neutral-900",
  fontWeight: "normal",
  className: "",
  labelDisable: false,
};

export default Label;
