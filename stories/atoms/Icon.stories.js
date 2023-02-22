import React from "react";
import Icon from "../../atoms/Icon";
export default {
  title: "Atoms /Icons",
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Icons = Template.bind({});
Icons.args = {
  iconSrc: "/images/icons/home.svg",
  iconAlt: 'Home Icon',
};