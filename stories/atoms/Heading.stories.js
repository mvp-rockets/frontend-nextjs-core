import React from "react";
import Heading from "../../atoms/Heading";
export default {
  title: "Atoms /Headings",
  component: Heading,
  argTypes: {
    type: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
};

const Template = (args) => <Heading {...args} />;

export const Headings = Template.bind({});
Headings.args = {
  className: "",
  type: "h1",
  children: "Heading content",
};