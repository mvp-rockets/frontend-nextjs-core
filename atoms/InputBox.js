import PropTypes from "prop-types";

const InputBox = ({
  isError,
  errorMessage,
  className,
  variant,
  disabled,
  type,
  register,
  id,
  dbName,
  isLabel,
  labelFor,
  labelText,
  labelClass,
  placeholder,
  ...otherProps
}) => {
  const inputSizeStyles = {
    Default: "px-4 py-[10px]",
    Small: "p-2",
    Large: "px-4 py-3",
  };

  const inputDisabledClass = disabled
    ? "cursor-not-allowed disabled:bg-neutral-100 disabled:border-neutral-100 disabled:placeholder:text-error-500"
    : "cursor-pointer";

  const inputBorderStyle = isError
    ? "border-error-100 hover:border-error-100 focus:border-error-100"
    : "border-neutral-300 hover:border-neutral-500 focus:border-primary-900";

  return (
    <div className="relative">
      {isLabel && (
        <label
          htmlFor={labelFor}
          className={`text-neutral-900 text-base leading-6 font-normal block pb-2 ${labelClass}`}
        >
          {labelText}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        {...(register && { ...register(dbName) })}
        className={`
          ${inputSizeStyles[variant]}
          w-full border bg-white rounded-lg outline-none placeholder:text-neutral-400 text-neutral-900 text-base font-normal leading-[21px] appearance-none
          ${inputDisabledClass}
          ${inputBorderStyle}
          select-none
          ${className}
        `}
        disabled={disabled}
        {...otherProps}
      />
      {isError && (
        <span
          className={`text-error-100 pl-0.5 text-sm pt-2 font-normal leading-[21px] select-none`}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};

InputBox.defaultProps = {
  isError: false,
  className: "",
  variant: "Default",
  disabled: false,
  isLabel: false,
  type: "text",
};

InputBox.propTypes = {
  id: PropTypes.string,
  dbName: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disableClass: PropTypes.string,
  baseClasses: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["Default", "Small", "Large"]),
  disabled: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  register: PropTypes.func,
  isLabel: PropTypes.bool,
  labelText: PropTypes.string,
  labelFor: PropTypes.string,
  labelClass: PropTypes.string,
};

export default InputBox;
