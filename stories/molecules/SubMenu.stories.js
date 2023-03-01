import React from "react";
import SubMenu from "../../molecules/SubMenu";

export default {
  title: "molecules/SubMenu",
  component: SubMenu,
};

const Template = (args) => <SubMenu {...args} />;
const menuItems = [
  {
    title: 'Menu1',
    url: '/menu1',
  },
  {
    title: 'Menu2',
    url: '/menu2',
    submenu: [
      {
        title: "Submenu",
        subTitle: "Submenu",
        url: "/abc",
        iconSrc: "menu-icon",
        iconPosition: "left",
        submenu: [
          {
            title: "Submenu",
            subTitle: "Submenu",
            url: "/abc",
            iconSrc: "menu-icon",
            iconPosition: "left",
          }
        ]
      },
      {
        title: "Submenu",
        url: "/abc",
        iconSrc: "menu-icon",
        iconPosition: "left"
      },
      {
        title: "Submenu",
        subTitle: "Submenu",
        url: "/abc",
        iconSrc: "menu-icon",
        iconPosition: "right"
      },
      {
        title: "Submenu",
        url: "/abc",
      },
    ],
  },

  {
    title: 'Menu3',
    url: '/menu3',
    submenu: [
      {
        title: "Submenu",
        subTitle: "Submenu",
        url: "/abc",
        iconSrc: "menu-icon",
        iconPosition: "left",
      }
    ],
  },
];


export const SubMenus = Template.bind({});
SubMenus.args = {
  menuItems
};
