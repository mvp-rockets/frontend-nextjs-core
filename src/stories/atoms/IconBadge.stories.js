import React from "react";
import IconBadge from "../../atoms/IconBadge";
export default {
  title: "Atoms /IconBadges",
  component: IconBadge,
  argTypes: {
    style: {
      control: "select",
      options: ["primary", "secondary", "ghostPrimary", "ghostSecondary"],
    },
  },
};
const Template = (args) => <IconBadge {...args} />;


export const IconBadges = Template.bind({});
IconBadges.args = {
  children: "1",
  style: "primary",
};