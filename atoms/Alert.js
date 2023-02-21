import Image from "next/image";
import PropTypes from "prop-types";

const Alert = ({ children, variant, alertClass = "" }) => {
  const alertType = {
    infoAlert: "infoAlert",
    errorAlert: "errorAlert",
    successAlert: "successAlert",
    warningAlert: "warningAlert",
    infoAlertLight: "infoAlertLight",
    errorAlertLight: "errorAlertLight",
    successAlertLight: "successAlertLight",
    warningAlertLight: "warningAlertLight",
  };

  const alertStyle = {
    infoAlert: "bg-black text-white",
    errorAlert: "bg-black text-white",
    successAlert: "bg-black text-white",
    warningAlert: "bg-black text-white",
    infoAlertLight: "bg-black text-info-100",
    errorAlertLight: "bg-black text-error-100",
    successAlertLight: "bg-black text-success-100",
    warningAlertLight: "bg-black text-warning-100",
  };

  return (
    <div
      variant={alertType[variant]}
      className={`p-[22px] flex rounded text-sm ${alertStyle[variant]} ${alertClass}`}
    >
      <span className={`mr-3.5 flex items-center flex-shrink-0`}>
      
      </span>

      {children}
    </div>
  );
};
export default Alert;

Alert.propTypes = {
  variant: PropTypes.string,
  alertClass: PropTypes.string,
  children: PropTypes.string,
};
