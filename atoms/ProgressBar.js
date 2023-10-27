import classnames from "classnames";
import PropTypes from "prop-types";

const progressBarStyles = {
  rounded: "rounded-full",
  soft: "rounded",
  sharp: "rounded-none",
};

const progressBarSizes = {
  default: "h-4",
  small: "h-2",
};

const ProgressBar = ({
  style,
  size,
  hideLabel,
  background,
  activeBackground,
  className,
  value,
}) => {
  return (
    <>
      {!hideLabel && (
        <div className="flex mb-2 text-sm justify-between text-neutral-800">
          <span>On Going</span>
          <span>{value}</span>
        </div>
      )}

      <div
        className={classnames(
          className,
          "w-full",
          background,
          progressBarStyles[style]
        )}
      >
        <div
          style={{ width: value }}
          className={classnames(
            className,
            "w-full flex items-center",
            activeBackground,
            progressBarStyles[style],
            progressBarSizes[size]
          )}
        ></div>
      </div>
    </>
  );
};

ProgressBar.defaultProps = {
  style: "rounded",
  size: "small",
  hideLabel: false,
  background: "bg-neutral-200",
  activeBackground: "bg-primary-900",
  className: "",
  value: "40%",
};

ProgressBar.propTypes = {
  style: PropTypes.oneOf(["rounded", "soft", "sharp"]),
  size: PropTypes.oneOf(["default", "small"]),
  value: PropTypes.string,
  hideLabel: PropTypes.bool,
  background: PropTypes.string,
  activeBackground: PropTypes.string,
};

export default ProgressBar;
