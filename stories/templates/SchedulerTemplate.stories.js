import React from "react";
import SchedulerTemplate from "../../templates/SchedulerTemplate";

export default {
  title: "templates/SchedulerTemplate",
  component: SchedulerTemplate,
};

const Template = (args) => <SchedulerTemplate {...args} />;

export const Default = Template.bind({});
const tagList = [
  {
    date: "1 Oct 2022",
    times: [
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
    ],
  },
  {
    date: "1 Nov 2022",
    times: [
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
    ],
  },
  {
    date: "1 Dec 2022",
    times: [
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
    ],
  },
];

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

  tagList,
  headingText: "Manage Recurring Schedules",
  subHeading: "Breif explanation of what the feature is about.",
  footerText: "Copyright © 2022, MVPRockets. All rights reserved.",
};
