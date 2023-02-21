import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SubMenuList = ({ item, type, subMenuClass, activeLinkColor, linkColor, linkHoverColor, linkHoverBgColor }) => {
    const { title, subTitle, url = "", iconSrc, iconWidth = "18", iconHeight = "18", iconAlt = "icon", iconPosition = "left" } = item;

    const [openDropdown, setOpenDropDown] = useState(null);

    const [isActive, setIsActive] = useState(false);

    const onClick = () => {
        setIsActive(!isActive);
        setOpenDropDown(!openDropdown);
    };
    return (
        <li>
            <div className="relative">
                <Link href={url}>
                    <div
                        className={`flex px-4 hover:${linkHoverColor} hover:${linkHoverBgColor} items-center ${
                            iconPosition === "right" ? "flex-row-reverse justify-between" : "flex-row"
                        } ${item.submenu && "pr-8"} ${subTitle ? "py-2" : "py-2.5"} ${isActive && "border-l-2 border-primary-900 md:border-0"}`}
                        onClick={onClick}
                    >
                        {iconSrc && (
                            <div className={`flex-shrink-0 ${iconPosition === "right" ? "ml-2.5" : "mr-2.5"}`}>
                                <Image src={iconSrc} width={iconWidth} height={iconHeight} />
                            </div>
                        )}

                        <div className={`pr-3 ${iconSrc && "min-w-[100px]"}`}>
                            <div className={`text-sm ${isActive ? activeLinkColor : linkColor}`}>{title}</div>
                            <div className={`text-xs ${isActive ? activeLinkColor : linkColor}`}>{subTitle}</div>
                        </div>
                    </div>
                </Link>
                {item.submenu && item.submenu.length > 0 && (
                    <span className="absolute top-2/4 -translate-y-1/2 right-4">
                        {" "}
                        <Image src={`/images/icons/angle-${isActive ? "up-b" : "down"}.svg`} width="11" height="6" alt="" />
                    </span>
                )}
            </div>
            {item.submenu && (
                <ul class={` z-10   ${subMenuClass} ${type == "vertical" ? "md:absolute" : "relative"} ${!openDropdown && "hidden"} ${isActive && "pl-4 md:pl-0"}`}>
                    {item.submenu.map((subitem) => (
                        <SubMenuList item={subitem} />
                    ))}
                </ul>
            )}
        </li>
    );
};

const SubMenu = ({ menuItems, type, subMenuClass, menuClass, activeLinkColor, linkColor, linkHoverColor, linkHoverBgColor }) => {
    return (
        <ul className={`md:flex ${menuClass} ${type == "vertical" ? "flex-row" : "flex-col"}`}>
            {menuItems.map((item) => (
                <SubMenuList
                    item={item}
                    type={type}
                    subMenuClass={subMenuClass}
                    activeLinkColor={activeLinkColor}
                    linkColor={linkColor}
                    linkHoverColor={linkHoverColor}
                    linkHoverBgColor={linkHoverBgColor}
                ></SubMenuList>
            ))}
        </ul>
    );
};

SubMenu.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    link: PropTypes.string,
    linkColor: PropTypes.string,
    activeLinkColor: PropTypes.string,
    linkHoverColor: PropTypes.string,
    iconSrc: PropTypes.string,
    iconWidth: PropTypes.string,
    iconHeight: PropTypes.string,
    iconAlt: PropTypes.string,
    iconPosition: PropTypes.string,
};

export default SubMenu;
