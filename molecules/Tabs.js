import PropTypes from "prop-types";
import Text from "../atoms/Text";

const Tabs = ({ tabsClass, tabs, type, onClick, ...property }) => {
  const isVerticalFilled = type === "verticalFilled";
  const isVerticalRight = type === "verticalRight";
  const isVerticalLeft = type === "verticalLeft";
  const isHorizontalFilled = type === "horizontalFilled";
  const isHorizontalDefault = type === "horizontalDefault";
  const isHorizontalJustified = type === "horizontalJustified";

  return (
    <ul
      className={`flex ${
        isVerticalFilled ? "flex-col w-fit min-w-[130px]" : ""
      } ${isVerticalRight ? "flex-col w-fit" : ""} ${
        isVerticalLeft ? "flex-col w-fit" : ""
      } flex-row flex-nowrap overflow-x-auto ${property.className}`}
    >
      {tabs.map((tab) => (
        <li className={tabsClass} onClick={() => onClick(tab)} key={tab.title}>
          <a href={tab.href} className="px-4 md:px-0">
            <Text
              variant="bodySmall"
              className={`transform transition-transform active:scale-95 duration-300 ${
                isHorizontalFilled ? "py-4 px-4 md:px-12" : ""
              } ${isVerticalFilled ? "py-4 px-6" : ""} ${
                isVerticalRight ? "py-4 px-6 border-r" : ""
              } ${isVerticalLeft ? "py-4 px-6 border-l" : ""} ${
                isHorizontalDefault ? "px-2 pb-3 border-b-2" : ""
              } ${isHorizontalJustified ? "px-12 pb-3 border-b-2" : ""} ${
                tab.active
                  ? `${
                      isHorizontalFilled
                        ? "bg-primary-900 border-none text-white rounded-lg"
                        : ""
                    } ${
                      isVerticalRight
                        ? "border-r-2 border-primary-900 text-neutral-800"
                        : ""
                    } ${
                      isVerticalLeft
                        ? "border-l-2 border-primary-900 text-neutral-800"
                        : ""
                    } ${isVerticalFilled ? "bg-primary-900 text-white" : ""} ${
                      isHorizontalDefault || isHorizontalJustified
                        ? "px-4 text-neutral-800 border-primary-900"
                        : ""
                    } font-medium cursor-pointer`
                  : "cursor-pointer text-neutral-500 border-neutral-300"
              }`}
            >
              {tab.title}
            </Text>
          </a>
        </li>
      ))}
    </ul>
  );
};

Tabs.defaultProps = {
  tabsClass: "",
  tabs: [],
  type: "horizontalDefault",
  onClick: () => {},
};

Tabs.propTypes = {
  tabsClass: PropTypes.string,
  type: PropTypes.oneOf([
    "horizontalJustified",
    "horizontalDefault",
    "horizontalFilled",
    "verticalFilled",
    "verticalLeft",
    "verticalRight",
  ]),
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
  onClick: PropTypes.func,
};

export default Tabs;
