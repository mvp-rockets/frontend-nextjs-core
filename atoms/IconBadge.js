import classnames from "classnames";
import Image from "next/image";
import PropTypes from "prop-types";

const badgeStyles = {
  primary: "bg-primary-900 text-white",
  secondary: "bg-secondary-900 text-white",
  ghostPrimary: "bg-white text-primary-900",
  ghostSecondary: "bg-white text-secondary-900",
};

const IconBadge = ({
  style,
  className,
  children,
  iconSrc,
  iconWidth,
  iconHeight,
  iconAlt,
}) => (
  <div className="relative inline-block">
    <Image src={iconSrc} width={iconWidth} height={iconHeight} alt={iconAlt} />
    <div
      className={classnames(
        "flex items-center justify-center absolute rounded-full w-4 h-4 text-xs font-medium -top-1.5 -right-1.5",
        badgeStyles[style],
        className
      )}
    >
      {children}
    </div>
  </div>
);

IconBadge.propTypes = {
  style: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
  iconSrc: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  iconAlt: PropTypes.string,
};

IconBadge.defaultProps = {
  style: "primary",
  className: "",
  children: "",
  iconSrc: "/images/icons/notification.svg",
  iconWidth: "20",
  iconHeight: "20",
  iconAlt: "Icon",
};

export default IconBadge;
