import React from "react";
import Checkbox from "../../atoms/Checkbox";

export default {
  title: "atoms/Checkboxs",
  component: Checkbox,
  argTypes: {
    type: {
      control: "select",
      options: ["default", "withIcon"],
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Checkboxs = Template.bind({});
Checkboxs.args = {
  id: "test",
  name: "test",
  className: "",
  handleChange: () => {},
  isSelected: false,
  isError: false,
  checkBoxDisable: false,
  value: "test",
  type: "default",
  icon: "thumb",
  iconSize: "20",
  showIcon: true,
  checkBoxLabel: "Checkbox Text",
};
