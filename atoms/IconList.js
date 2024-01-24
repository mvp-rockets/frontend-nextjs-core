import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const IconList = ({
  lists,
  Type,
  listClass = "",
  itemFontSize = "text-base",
  itemFontWeight = "font-normal",
  itemFontColor = "text-neutral-900",
  itemClass = "",
  width = "min-w-[120px] max-w-max",
  border = "border border-gray-300",
  itemPadding = "px-4 py-3",
  displayDirection = "flex-col"
}) => {

  return (
    <Type className={` flex shadow-outline bg-white rounded-md overflow-hidden z-40 ${width} ${listClass} ${border} ${displayDirection}`}>
      {lists.map((list, index) => (
        <li
          {...{
            className: `${itemClass} ${itemPadding} flex flex-row justify-start items-center ${itemFontSize} ${itemFontWeight} ${itemFontColor} cursor-pointer`,
            onClick: list.onClick
          }}>
          {list.listIconSrc && <span className="mr-2">
            <Image src={list.listIconSrc} width={list.listIconWidth} height={list.listIconHeight} alt={list.listIconAlt} />
          </span>}
          {list.item}
        </li>
      ))}
    </Type>
  );
};

export default IconList;

IconList.propTypes = {
  className: PropTypes.string,
  Type: PropTypes.string,
  listClass: PropTypes.string,
  listClass: PropTypes.string,
  itemClass: PropTypes.string,
  width: PropTypes.string,
  listIconSrc: PropTypes.string,
  listIconWidth: PropTypes.number,
  listIconHeight: PropTypes.number,
  listIconAlt: PropTypes.string,
};