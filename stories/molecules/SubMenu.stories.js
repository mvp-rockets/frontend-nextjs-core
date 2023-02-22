import React from "react";
import SubMenu from "../../molecules/SubMenu";

export default {
    title: "molecules/SubMenu",
    component: SubMenu,
    argTypes: {
        type: {
            control: "select",
            options: ["vertical", "horizontal"],
        },
    },
};

const Template = (args) => <SubMenu {...args} />;
const menuItems = [
    {
        title: "Menu1",
        url: "/menu1",
    },
    {
        title: "Menu2",
        url: "/menu2",
        submenu: [
            {
                title: "Submenu",
                subTitle: "Submenu",
                url: "/abc",
                iconSrc: "/images/icons/home-icon.svg",
                iconPosition: "left",
                submenu: [
                    {
                        title: "Submenu",
                        subTitle: "Submenu",
                        url: "/abc",
                        iconSrc: "/images/icons/home-icon.svg",
                        iconPosition: "left",
                    },
                ],
            },
            {
                title: "Submenu",
                url: "/abc",
                iconSrc: "/images/icons/home-icon.svg",
                iconPosition: "left",
            },
            {
                title: "Submenu",
                subTitle: "Submenu",
                url: "/abc",
                iconSrc: "/images/icons/home-icon.svg",
                iconPosition: "right",
            },
            {
                title: "Submenu",
                url: "/abc",
            },
        ],
    },

    {
        title: "Menu3",
        url: "/menu3",
        submenu: [
            {
                title: "Submenu",
                subTitle: "Submenu",
                url: "/abc",
                iconSrc: "/images/icons/home-icon.svg",
                iconPosition: "left",
            },
        ],
    },
];

export const SubMenus = Template.bind({});
SubMenus.args = {
    type: "vertical",
    menuClass: "",
    subMenuClass: "md:shadow-[0px_4px_6px_rgba(0,0,0,0.1)]",
    menuItems,
};
