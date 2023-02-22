import React from "react";
import InputNumber from "../../atoms/InputNumber";
export default {
  title: "Atoms/InputNumbers",
  component: InputNumber,
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    variant: {
      control: "select",
      options: ["Default", "Small", "Large"],
    },
  },
};
const Template = (args) => <InputNumber {...args} />;
export const InputNumbers = Template.bind({});
InputNumbers.args = {
  disable: false,
  size: 'medium'
};