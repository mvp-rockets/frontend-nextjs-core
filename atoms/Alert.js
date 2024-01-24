import Image from "next/image";
import PropTypes from "prop-types";

const alertTypes = {
  info: {
    bgColor: "bg-info-100",
    textColor: "text-white",
  },
  error: {
    bgColor: "bg-error-100",
    textColor: "text-white",
  },
  success: {
    bgColor: "bg-success-100",
    textColor: "text-white",
  },
  warning: {
    bgColor: "bg-warning-100",
    textColor: "text-white",
  },
  infoLight: {
    bgColor: "bg-info-50",
    textColor: "text-info-100",
  },
  errorLight: {
    bgColor: "bg-error-50",
    textColor: "text-error-100",
  },
  successLight: {
    bgColor: "bg-success-50",
    textColor: "text-success-100",
  },
  warningLight: {
    bgColor: "bg-warning-50",
    textColor: "text-warning-100",
  },
};


const Alert = ({ children, variant, isIcon }) => {
  const alertType = alertTypes[variant] || alertTypes.info;
  return (
    <div
      variant={alertType[variant]}
      className={`py-4 px-5 flex rounded text-sm font-normal ${alertType.bgColor} ${alertType.textColor}`}
    >
      {isIcon && (
        <span className={`mr-2.5 flex items-center flex-shrink-0`}>
          <Image
            src={`images/icons/${variant}.svg`}
            width="20"
            height="20"
            alt="icon"
          />
        </span>
      )}

      {children}
    </div>
  );
};

Alert.defaultProps = {
  children: "This is an Alert-error",
  variant: "info",
  isIcon: true,
};

Alert.propTypes = {
  variant: PropTypes.string,
  isIcon: PropTypes.bool,
  children: PropTypes.string,
};

export default Alert;
