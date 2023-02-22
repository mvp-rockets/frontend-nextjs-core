import React from "react";
import TextArea from "../../atoms/TextArea";

export default {
  title: "Atoms/TextAreas",
  component: TextArea,
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "default", "large"],
    },
  },
};

const Template = (args) => <TextArea {...args} />;

export const TextAreas = Template.bind({});
TextAreas.args = {
  variant: "small",
  id: "name",
  name: "name",
  placeholder: "Placeholder",
  register: () => true,
  errorMessage: "Error Message"
};