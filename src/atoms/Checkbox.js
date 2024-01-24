import classnames from "classnames";
import PropTypes from "prop-types";

const Checkbox = ({
  id,
  name,
  className,
  handleChange,
  isSelected,
  value,
  checkBoxLabel,
  hideLabel,
  checkBoxDisable,
  isError,
  checkBoxLabelPos,
  labelClassName,
}) => {
  const containerClassNames = classnames(
    "relative inline-flex items-center cursor-pointer",
    checkBoxLabelPos === "left" && "flex-row-reverse",
    checkBoxDisable && "pointer-events-none"
  );

  const checkboxClassNames = classnames(
    className,
    "flex justify-center items-center relative w-6 h-6 rounded border before:none before:w-3 before:h-3 before:bg-no-repeat before:bg-center",
    {
      "border-neutral-400": !isSelected && !isError,
      "bg-primary-900 border-primary-900 before:flex before:bg-checkMarkWhite":
        isSelected,
      "bg-neutral-200 border-neutral-400 pointer-events-none": checkBoxDisable,
      "bg-neutral-300 border-neutral-300 before:flex before:bg-checkMarkGray":
        checkBoxDisable && isSelected,
      "border-error-100": isError,
    }
  );

  return (
    <>
      <div className={containerClassNames}>
        <input
          id={id}
          name={name}
          onChange={handleChange}
          value={value}
          type="checkbox"
          checked={isSelected}
          className={`absolute opacity-0 w-full h-full left-0 top-0 z-10 cursor-pointer ${className}`}
        />
        <span className={checkboxClassNames}></span>
        <span
          className={`text-sm text-neutral-900 ${labelClassName} ${
            checkBoxLabelPos === "left" ? "mr-2" : "ml-2"
          }`}
        >
          {!hideLabel ? checkBoxLabel : ""}
        </span>
      </div>
      {isError && (
        <div className="block text-xs text-error-100 mt-1">Error message</div>
      )}
    </>
  );
};

Checkbox.defaultProps = {
  id: "",
  name: "",
  className: "",
  handleChange: () => {},
  isSelected: false,
  value: "",
  checkBoxLabel: "",
  hideLabel: false,
  checkBoxDisable: false,
  isError: false,
  checkBoxLabelPos: "right",
  labelClassName: "",
};

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func,
  isSelected: PropTypes.bool,
  isError: PropTypes.bool,
  value: PropTypes.string,
  checkBoxLabel: PropTypes.string,
  hideLabel: PropTypes.bool,
  checkBoxDisable: PropTypes.bool,
  checkBoxLabelPos: PropTypes.oneOf(["left", "right"]),
};

export default Checkbox;
