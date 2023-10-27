import React from "react";
import Divider from "../../atoms/Divider";

export default {
  title: "Atoms/Divider",
  component: Divider,
  argTypes: {
    align: {
      control: "select",
      options: ["left", "right", "center"],
    },
  },
};

const Template = (args) => <Divider {...args} />;

export const divider = Template.bind({});
divider.args = {
  text: "Text",
  align: "left",
};
