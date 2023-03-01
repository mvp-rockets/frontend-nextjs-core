import React from "react";
import Avatar from "../../atoms/Avatar";

export default {
  title: "Atoms/Avatar",
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
const iconUrl = "/images/icons/profile-img.svg";

const Template = (args) => <Avatar {...args} />;

export const avatar = Template.bind({});

avatar.args = {
    className: "",
    imgSrc: imgUrl,
    badgeTxt: 15,
    badge: "badge",
};

export const iconAvatars = Template.bind({});
iconAvatars.args = {
    className: "",
    imgSrc: iconUrl,
    badgeTxt: 16,
    badge: "badge",
    bgColor: "bg-gray-300",
    iconAvatar: true
};

export const textAvatars = Template.bind({});
textAvatars.args = {
    className: "",
    title: "H",
    badgeTxt: 15,
    badge: "badge",
    bgColor: "bg-primary-300",
    titleColor: "text-primary-900"
};

export const textAvatarsBg = Template.bind({});

textAvatarsBg.args = {
    className: "",
    title: "H",
    badgeTxt: 15,
    badge: "badge",
    bgColor: "bg-success-100",
    titleColor: "text-white"
};