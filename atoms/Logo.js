import Image from "next/image";
import PropTypes from "prop-types";

const Logo = ({ className, width, height, alt, src, onClick }) => {
  return (
    <div className={`cursor-pointer w-fit select-none ${className}`}>
      <Image
        onClick={onClick}
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
};

Logo.defaultProps = {
  className: "",
  width: "",
  height: "",
  alt: "",
  src: "",
  onClick: "",
};

Logo.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
};

export default Logo;
