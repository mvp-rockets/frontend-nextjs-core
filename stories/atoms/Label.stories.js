import React from "react";
import Label from "../../atoms/Label";

export default {
  title: "Atoms/Labels",
  component: Label,
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => <Label {...args} />;

export const Labels = Template.bind({});
Labels.args = {
  variant: "small",
  labelFor: "name",
  children: "Small Label",
};
