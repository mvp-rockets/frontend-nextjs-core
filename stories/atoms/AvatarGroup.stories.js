import React from "react";
import AvatarGroup from "../../atoms/AvatarGroup";
export default {
  title: "Atoms/AvatarGroups",
  component: AvatarGroup,
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large", "extraLarge"],
    },
    shape: {
      control: "select",
      options: ["normal", "square", "circle"],
    },
  },
};

const Template = (args) => <AvatarGroup {...args} />;
export const avatarGroups = Template.bind({});
avatarGroups.args = {
  maxDisplaySize: 5,
  shape: "circle",
  size: "large",
  imgWidth: 64,
  imgHeight: 64,
  avatarLists: [
    {
      imgSrc: "../../images/icons/profile.jpg",
      imgAlt: "test1",
    },
    {
      imgSrc: "../../images/icons/profile-img.svg",
      iconAvatar: true,
      imgAlt: "test2",
      bgColor: "bg-warning-100",
      titleColor: "text-white",
    },
    {
      title: "H",
      onClick: () => { },
      bgColor: "bg-info-100",
      titleColor: "text-white",
    },
    {
      title: "A",
      onClick: () => { },
      bgColor: "bg-success-100",
      titleColor: "text-white",
    },
    {
      title: "P",
      onClick: () => { },
      bgColor: "bg-error-100",
      titleColor: "text-white",
    },
    {
      title: "Z",
      onClick: () => { },
      bgColor: "bg-error-100",
      titleColor: "text-white",
    },
  ]
};