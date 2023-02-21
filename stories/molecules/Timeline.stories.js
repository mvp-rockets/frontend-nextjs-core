import React from "react";
import TimeLine from "../../molecules/Timeline";
export default {
  title: "Molecules /TimeLines",
  component: TimeLine,
  argTypes: {
    types: {
      control: "select",
      options: ["icon", "dot"],
    },
  },
};

const Template = (args) => <TimeLine {...args} />;

const timeLineListData = [
  {
    date: "Today",
    title: "Pending Approval",
    desc: "This request requires your approval."
  },
  {
    date: "May 19, 2018",
    title: "Approval Requested",
    desc: "John Lloyd has requested your approval."
  },
  {
    date: "2018",
    title: "Request Created",
    desc: "Request created by Kim May."
  },
];

export const timeLines = Template.bind({});
timeLines.args = {
  timeLineListData,
  types: "icon",
};
