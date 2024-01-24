import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { useState } from "react";

const Breadcrumb = ({
  data,
  divider,
  textSize,
  breadcrumbTotalCount,
  numberOfBreadcrumbItems,
  handleBack,
}) => {
  const [showAllBreadcrumbs, setShowAllBreadcrumbs] = useState(false);

  function modifyBreadcrumb(data, showAllBreadcrumbs) {
    if (data.length > breadcrumbTotalCount && !showAllBreadcrumbs) {
      const halfBreadcrumbItems = Math.floor(numberOfBreadcrumbItems);
      const modifiedData = [
        ...data.slice(0, halfBreadcrumbItems),
        { name: "...", isActive: true },
        ...data.slice(-halfBreadcrumbItems),
      ];
      return modifiedData;
    }
    return data;
  }

  if (data.length <= 1) {
    return null;
  }

  const breadcrumbType = {
    slash: {
      icon: "/images/icons/slash.svg",
      width: 6,
      height: 15,
    },
    arrow: {
      icon: "/images/icons/arrow-right.svg",
      width: 16,
      height: 16,
    },
  };

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="cursor-pointer"
        src={`/images/icons/arrow-left.svg`}
        width="20"
        height="20"
        alt="icon"
        onClick={handleBack}
      />
      <ul className={`flex flex-wrap space-x-2 ${textSize}`}>
        {modifyBreadcrumb(data, showAllBreadcrumbs)?.map(
          ({ name, path }, key) =>
            key + 1 === modifyBreadcrumb(data, showAllBreadcrumbs).length ? (
              <li
                className={`pointer-events-none text-neutral-500 font-normal leading-5 capitalize`}
                key={key}
              >
                {" "}
                {name}{" "}
              </li>
            ) : (
              <li
                className={`flex space-x-2 font-normal leading-5 text-black capitalize`}
                onClick={
                  data.length > breadcrumbTotalCount
                    ? () => setShowAllBreadcrumbs(true)
                    : () => null
                }
              >
                <Link key={key} href={path ? path : ""}>
                  {name}
                </Link>

                <div className="flex items-center justify-center">
                  <Image
                    src={breadcrumbType[divider].icon}
                    width={breadcrumbType[divider].width}
                    height={breadcrumbType[divider].height}
                    alt="icon"
                  />
                </div>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Breadcrumb;

Breadcrumb.propTypes = {
  divider: PropTypes.string,
  textSize: PropTypes.string,
  handleBack: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ),
  numberOfBreadcrumbItems: PropTypes.number,
  breadcrumbTotalCount: PropTypes.number,
};

Breadcrumb.defaultProps = {
  textSize: "text-base",
  data: [],
  breadcrumbTotalCount: 6,
  numberOfBreadcrumbItems: 3,
  handleBack: () => {},
  divider: "slash",
};
