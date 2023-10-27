import PropTypes from "prop-types";
const TextArea = ({
  id,
  name,
  placeholder,
  padding,
  bg,
  height,
  fontSize,
  fontColor,
  border,
  borderColor,
  borderRadius,
  className,
  disabled,
  isError,
  errorClass,
  errorMessage,
  register,
  onChangeValue,
  ...property
}) => {
  const textAreaField = register(id);

  return (
    <div className="w-full mb-6">
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={`w-full outline-none resize-none  ${bg} ${height} ${padding} ${border} ${borderRadius} ${fontSize} ${fontColor} ${className} ${
          disabled ? "pointer-events-none " : "cursor-pointer "
        } ${isError ? "border-error-100" : `${borderColor}`} `}
        {...textAreaField}
        {...property}
        onChange={(e) => {
          if (textAreaField) {
            textAreaField.onChange(e);
          }
          onChangeValue(e);
        }}
        disabled={disabled}
      ></textarea>
      {isError ?? (
        <span className={`${errorClass} select-none`}> {errorMessage} </span>
      )}
    </div>
  );
};

TextArea.defaultProps = {
  id: "",
  name: "",
  placeholder: "Placeholder",
  padding: "p-4",
  bg: "bg-lightGrey disable:bg-neutral-100",
  height: "h-[120px]",
  fontSize: "text-base",
  fontColor: "placeholder:text-neutral-600 text-neutral-900",
  border: "border",
  borderColor:
    "border-neutral-400 hover:border-neutral-500 focus:border-primary-900 visited:border-neutral-400 disable:border-neutral-300",
  borderRadius: "rounded",
  className: "",
  disabled: false,
  isError: false,
  errorClass: "text-error-100 pl-0.5 text-sm pt-2 font-normal",
  errorMessage: "",
  register: () => true,
  onChangeValue: () => {},
};

TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  padding: PropTypes.string,
  bg: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isError: PropTypes.bool,
  errorClass: PropTypes.string,
  errorMessage: PropTypes.string,
  register: PropTypes.func,
  onChangeValue: PropTypes.func,
};

export default TextArea;
