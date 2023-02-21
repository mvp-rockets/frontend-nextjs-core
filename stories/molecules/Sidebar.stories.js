import React from "react";
import Sidebar from "../../molecules/Sidebar";

export default {
    title: "molecules/Sidebar",
    component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Sidebars = Template.bind({});
Sidebars.args = {
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
