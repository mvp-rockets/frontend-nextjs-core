import React from "react";
import PropTypes from "prop-types";

const Divider = ({ text, align }) => {
  const alignmentClasses =
    {
      left: "justify-start ml-9",
      right: "justify-end mr-9",
      center: "justify-center",
    }[align] || "justify-center";

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-b border-neutral-200"></div>
      </div>
      {text && (
        <div className={`relative flex ${alignmentClasses}`}>
          <span className="bg-white px-4 text-base text-neutral-900">
            {text}
          </span>
        </div>
      )}
    </div>
  );
};
Divider.defaultProps = {
  text: "Text",
  align: "center",
};
Divider.propTypes = {
  text: PropTypes.string,
  align: PropTypes.oneOf(["left", "right", "center"]),
};

export default Divider;
