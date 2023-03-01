import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState } from "react";

const AccordionList = ({ variant = "base", title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const accordionType = {
    base: "border-x-0 ",
    normal: "first:border-t",
  };

  const [display, setDisplay] = useState("hidden");

  const [opacity, setOpacity] = useState("opacity-0");

  const toggleActive = () => {
    if (display === "hidden") {
      setDisplay("block");
      setTimeout(() => setOpacity("opacity-100"), 100);
    }

    if (display === "block") {
      setOpacity("opacity-0");
      setTimeout(() => setDisplay("hidden"), 100);
    }

    setIsActive(!isActive);
  };

  return (
    <div
      variant={variant}
      className={`border group border-neutral-300  ${accordionType[variant]} ${
        isActive ? "border-t border-t-primary-900" : "border-t-0"
      }`}
    >
      <div
        className="flex justify-between p-4 cursor-pointer"
        onClick={toggleActive}
      >
        <div
          className={`text-lg text-neutral-900 pr-3 ${
            isActive && "font-medium"
          }`}
        >
          {title}
        </div>
        <div className="flex flex-shrink-0">
          {isActive ? (
            <Image
              src="/images/icons/angle-up-b.svg"
              width="18"
              height="10"
              alt=""
            />
          ) : (
            <Image
              src="/images/icons/angle-down.svg"
              width="18"
              height="10"
              alt=""
            />
          )}
        </div>
      </div>

      <div
        className={`p-4 pt-2 ${display} ${opacity} text-neutral-700 text-sm  transition-all duration-300 ease-in-out`}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

const Accordion = ({ variant, accordionData }) => {
  return (
    <>
      {accordionData.map(({ title, content }) => (
        <AccordionList variant={variant} title={title} content={content} />
      ))}
    </>
  );
};

export default Accordion;

Accordion.propTypes = {
  variant: PropTypes.string,
  accordionData: PropTypes.array,
};
