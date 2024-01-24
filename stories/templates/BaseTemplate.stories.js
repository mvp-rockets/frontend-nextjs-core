import React from "react";
import BaseTemplate from "../../env/templates/BaseTemplate";

export default {
  title: "templates/BaseTemplate",
  component: BaseTemplate,
};

const Template = (args) => <BaseTemplate {...args} />;

export const Default = Template.bind({});

Default.args = {
  cardPadding: "px-8 py-5",
  shadow: "shadow-nav",
  logo: "/images/logo.svg",
  logoAlt: "MVPRockets",
  logoHeight: "40",
  logoWidth: "140",
  menuItem: [
    { title: "All Features", active: true },
    { title: "API Services", active: false },
  ],

  sidebarColor: "bg-white",
  sidebarWidth: "w-[264px] min-w-[264px]",
  sidebarPadding: "p-8",
  menuTitle: "features",
  menuItems: [
    { title: "Scheduler", isActive: true },
    { title: "LMS", isActive: false },
    { title: "Extra", isActive: false },
  ],
};
