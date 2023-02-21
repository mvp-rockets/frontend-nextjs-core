import React from "react";
import ListItemDropDown from "../../molecules/ListItemDropDown";

export default {
  title: "molecules/ListItemDropDowns",
  component: ListItemDropDown,
};

const Template = (args) => <ListItemDropDown {...args} />;

export const ListItemDropDowns = Template.bind({});
ListItemDropDowns.args = {
  iconSrc: "/images/icons/dots.svg",
  iconWidth: 4,
  iconHeight: 18,
  iconAlt: "like",
  lists: [
    {
      item: "Edit",
      link: "",
      listIconSrc: "../images/icons/edit-square.svg",
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
