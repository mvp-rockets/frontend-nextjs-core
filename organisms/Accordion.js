import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";

const AccordionList = ({ title, content, isActive, onClick }) => {
  const accordionClasses = `shadow-accordion ${
    isActive ? "border-t-2 border-t-primary-900" : ""
  }`;

  const titleClasses = `text-lg text-neutral-900 pr-3 ${
    isActive ? "font-medium" : "font-normal"
  }`;

  return (
    <div className={`${accordionClasses}`}>
      <div
        className="flex justify-between p-4 cursor-pointer"
        onClick={onClick}
      >
        <div className={titleClasses}>{title}</div>
        <div className="flex flex-shrink-0">
          {isActive ? (
            <Image src="/images/icons/angle-up-b.svg" width="18" height="10" />
          ) : (
            <Image src="/images/icons/angle-down.svg" width="18" height="10" />
          )}
        </div>
      </div>
      <div
        className={`max-h-0 overflow-hidden transition-max-height duration-500 ease-in-out ${
          isActive ? "max-h-screen" : ""
        }`}
      >
        <div className="p-4 pt-2 text-neutral-700">{content}</div>
      </div>
    </div>
  );
};

const Accordion = ({ accordionData, multipleOpen }) => {
  const [activeIndices, setActiveIndices] = useState([]);

  const handleAccordionClick = (index) => {
    if (multipleOpen) {
      setActiveIndices((prevIndices) =>
        prevIndices.includes(index)
          ? prevIndices.filter((item) => item !== index)
          : [...prevIndices, index]
      );
    } else {
      if (activeIndices.includes(index)) {
        setActiveIndices([]);
      } else {
        setActiveIndices([index]);
      }
    }
  };

  return (
    <div className="border border-neutral-300 border-b-0">
      {accordionData.map(({ title, content }, index) => (
        <AccordionList
          key={index}
          title={title}
          content={content}
          isActive={activeIndices.includes(index)}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
};

Accordion.defaultProps = {
  accordionData: [],
  multipleOpen: false,
};

Accordion.propTypes = {
  accordionData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  multipleOpen: PropTypes.bool,
};

export default Accordion;
