import React from "react";
import Avatar from "../../atoms/Avatar";

export default {
  title: "Atoms/Avatars",
  component: Avatar,
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large", "extraLarge"],
    },
    shape: {
      control: "select",
      options: ["normal", "square", "circle"],
    },
    badge: {
      control: "select",
      options: ["normal", "badge", "dot"],
    },
  },
};

const imgUrl = "/images/icons/profile.jpg";

const Template = (args) => <Avatar {...args} />;

export const Avatars = Template.bind({});

Avatars.args = {
  className: "",
  imgSrc: imgUrl,
  title: "H",
  badgeTxt: 15,
  badge: "badge",
};