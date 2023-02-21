import React from "react";
import Alert from "../../atoms/Alert";

export default {
  title: "Atoms/Alerts",
  component: Alert,
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "error", "success", "warning", "infoLight", "errorLight", "successLight", "warningLight"],
    },
  },
};

const Template = (args) => <Alert {...args} />;

export const Alerts = Template.bind({});
Alerts.args = {
  children: "This is an Alert",
};
