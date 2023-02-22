import React from "react";
import LinkButton from "../../atoms/LinkButton";
export default {
  title: "Atoms /LinkButtons",
  component: LinkButton,
  argTypes: {
    variant: {
      control: "select",
      options: ["body", "bodySmall", "caption"],
    },
  },
};

const Template = (args) => <LinkButton {...args} />;

export const LinkButtons = Template.bind({});
LinkButtons.args = {
  children: "This is Link",
  variant: "body",
  href: "",
  className: "",
};