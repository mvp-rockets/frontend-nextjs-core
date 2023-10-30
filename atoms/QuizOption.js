import PropTypes from "prop-types";

const QuizOption = ({ option, optionText, variant, handleOption }) => {
  const optionStatusTypes = {
    default: {
      optionBgColor: "bg-neutral-300",
      optionTextColor: "text-neutral-900",
      bgColor: "bg-white",
      borderColor: "border-neutral-300",
    },
    correct: {
      optionTextColor: "text-white",
      optionBgColor: "bg-success-100",
      bgColor: "bg-success-50",
      borderColor: "border-success-100",
    },
    wrong: {
      optionTextColor: "text-white",
      optionBgColor: "bg-error-100",
      bgColor: "bg-error-50",
      borderColor: "border-error-100",
    },
  };

  const optionStatusType =
    optionStatusTypes[variant] || optionStatusTypes.default;
  return (
    <div
      variant={optionStatusType[variant]}
      className={`flex items-center text-sm text-neutral-900 border pr-5 ${optionStatusType.bgColor} ${optionStatusType.borderColor}`}
      onClick={handleOption}
    >
      <span
        className={`px-6 py-2 w-15 mr-7 text-base font-semibold ${optionStatusType.optionBgColor} ${optionStatusType.optionTextColor}`}
      >
        {option}
      </span>
      {optionText}
    </div>
  );
};
QuizOption.defaultProps = {
  variant: "correct",
  option: "A",
  optionText:
    "A firm's products are introduced into the market faster than its competitors’ ",
  handleOption: () => {},
};

QuizOption.propTypes = {
  variant: PropTypes.string,
  option: PropTypes.string,
  optionText: PropTypes.string,
  handleOption: PropTypes.func,
};

export default QuizOption;
