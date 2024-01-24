import PropTypes from "prop-types";

const Text = ({
  variant,
  fontSize,
  fontWeight,
  children,
  className,
  onClick,
}) => {
  const TextStyle = {
    body: "text-base",
    bodySmall: "text-sm",
    caption: "text-xs",
  };
  return (
    <p
      className={`${TextStyle[variant] || TextStyle.body} ${fontSize} ${
        fontWeight || ""
      } ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default Text;

Text.propTypes = {
  variant: PropTypes.oneOf(["body", "bodySmall", "caption"]),
  children: PropTypes.string,
  fontSize: PropTypes.string,
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
  onClick: PropTypes.func,
};

Text.defaultProps = {
  variant: "body",
  fontSize: "",
  fontWeight: "normal",
  children: "",
  className: "",
  onClick: () => {},
};
