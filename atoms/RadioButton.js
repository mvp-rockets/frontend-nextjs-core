import classnames from "classnames";
import PropTypes from "prop-types";

const RadioButton = ({
    data,
    id,
    name,
    className,
    handleChange,
    isSelected,
    value,
    radioLabel,
    hideLabel,
    radioDisable = false,
    isError = false,
    radioLabelPos = "right",
    labelClassName = "",
}) => {
    return (
        <>
            {data.map((radio, index) => (
                <>
                    <div
                        className={`relative inline-flex items-center px-2 cursor-pointer ${radioLabelPos == "left" ? "flex-row-reverse" : ""} ${
                            radio.radioDisable && "pointer-events-none"
                        }`}
                    >
                        <input
                            id={radio.id}
                            name={radio.name}
                            onChange={radio.handleChange}
                            value={radio.value}
                            type="radio"
                            checked={radio.isSelected}
                            className={`  cursor-pointer ${radio.className}`}
                        />

                        <span className={`text-sm text-neutral-900 ${labelClassName} ${radioLabelPos == "left" ? "mr-2" : "ml-2"}`}>
                            {!radio.hideLabel ? radio.radioLabel : ""}
                        </span>
                    </div>
                </>
            ))}

            {isError && <div className="block text-xs text-error-100 mt-1">Error message</div>}
        </>
    );
};

export default RadioButton;

RadioButton.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    handleChange: PropTypes.func,
    isSelected: PropTypes.bool,
    isError: PropTypes.bool,
    value: PropTypes.string,
    radioLabel: PropTypes.string,
    hideLabel: PropTypes.bool,
    radioDisable: PropTypes.bool,
    radioLabelPos: PropTypes.oneOf(["left", "right"]),
};
