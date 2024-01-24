import Image from "next/image";
import PropTypes from "prop-types";

const Icon = ({ className, iconSrc, iconWidth, iconHeight, iconAlt }) => {
  return (
    <Image
      src={iconSrc}
      width={iconWidth}
      height={iconHeight}
      alt={iconAlt}
      className={className}
    />
  );
};

export default Icon;

Icon.defaultProps = {
  className: "cursor-pointer",
  iconSrc: "/images/icons/home.svg",
  iconWidth: "20",
  iconHeight: "20",
  iconAlt: "Icon",
};

Icon.propTypes = {
  className: PropTypes.string,
  iconSrc: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  iconAlt: PropTypes.string,
};
