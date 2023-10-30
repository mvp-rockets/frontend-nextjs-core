import PropTypes from "prop-types";

const Heading = ({ children, type, className }) => {
  const headingStyles = {
    h1: "text-5xl",
    h2: "text-4xl",
    h3: "text-3xl",
    h4: "text-2xl",
    h5: "text-xl",
    h6: "text-lg",
  };

  const Type = headingStyles[type] ? type : "h1";

  return (
    <Type className={`${headingStyles[Type]} ${className}`}>{children}</Type>
  );
};

Heading.defaultProps = {
  type: "h1",
  className: "",
};

Heading.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Heading;
