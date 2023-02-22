import React from "react";
import Breadcrumb from "../../atoms/Breadcrumb";

export default {
  title: "Atoms/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    divider: {
      control: "select",
      options: ["primary", "secondary"],
    },
  },
};

const Template = (args) => <Breadcrumb {...args} />;

export const breadcrumb = Template.bind({});

breadcrumb.args = {
  data: [
    { name: "Home", path: "/home", isActive: false },
    { name: "services", path: "/Services", isActive: false },
    { name: "painting", path: "/Painting", isActive: true },
  ],
};
