import React from "react";
import Button from "../../atoms/Button";

export default {
  title: "Atoms/Buttons",
  component: Button,
};
const plusIcon = "../images/icons/plus.svg";

const Template = (args) => <Button {...args} />;
export const Buttons = Template.bind({});

Buttons.args = {
  label: "Label",
  icon: plusIcon
};