import React from "react";
import IconList from "../../atoms/IconList";

export default {
  title: "Atoms/IconLists",
  component: IconList,
};

const Template = (args) => <IconList {...args} />;

export const IconLists = Template.bind({});

IconLists.args = {
  className: "",
  Type: "ul",
  lists: [
    {
      listIconSrc: "/images/icons/image.svg",
      listIconWidth: "24",
      listIconHeight: "24",
      listIconAlt: "image",
      onClick: (e) => { }
    },
    {
      listIconSrc: "/images/icons/gif.svg",
      listIconWidth: "24",
      listIconHeight: "24",
      listIconAlt: "gif",
      onClick: (e) => { }
    },
    {
      listIconSrc: "/images/icons/video.svg",
      listIconWidth: "24",
      listIconHeight: "24",
      listIconAlt: "video",
      onClick: (e) => { }
    },
    {
      listIconSrc: "/images/icons/camera.svg",
      listIconWidth: "24",
      listIconHeight: "24",
      listIconAlt: "camera",
      onClick: (e) => { }
    },
  ]
};
