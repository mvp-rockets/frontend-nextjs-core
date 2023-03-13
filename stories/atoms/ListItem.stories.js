import React from "react";
import ListItem from "../../atoms/ListItem";

export default {
    title: "Atoms/ListItem",
    component: ListItem,
};

const Template = (args) => <ListItem {...args} />;

export const Listitem = Template.bind({});

Listitem.args = {
  className: "",
  Type: "ul",
  lists: [
    {
      item: "Edit",
      link: "",
      listIconSrc: "/images/icons/edit-square.svg",
      listIconWidth: "18",
      listIconHeight: "18",
      listIconAlt: "edit icon"
    },
    {
      item: "Delete",
      link: ``,
      listIconSrc: "/images/icons/delete.svg",
      listIconWidth: "18",
      listIconHeight: "18",
      listIconAlt: "Delete icon",
      onClick: (e) => { }
    },
  ]
};
