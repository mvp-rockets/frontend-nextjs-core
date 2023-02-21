import PropTypes from "prop-types";
import IcomoonIcon from "./IcomoonIcon";

const Alert = ({ children, variant = "info", alertClass = "" }) => {
    const alertType = {
        info: "info",
        error: "error",
        success: "success",
        warning: "warning",
        infoLight: "infoLight",
        errorLight: "errorLight",
        successLight: "successLight",
        warningLight: "warningLight",
    };

    const alertStyle = {
        info: "bg-info-100 text-white",
        error: "bg-error-100 text-white",
        success: "bg-success-100 text-white",
        warning: "bg-warning-100 text-white",
        infoLight: "bg-info-50 text-info-100",
        errorLight: "bg-error-50 text-error-100",
        successLight: "bg-success-50 text-success-100",
        warningLight: "bg-warning-50 text-warning-100",
    };

    return (
        <div variant={alertType[variant]} className={`p-[22px] flex rounded text-sm ${alertStyle[variant]} ${alertClass}`}>
            <span className={`mr-3.5 flex items-center flex-shrink-0`}>
                <IcomoonIcon icon={variant} size={20} />
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
