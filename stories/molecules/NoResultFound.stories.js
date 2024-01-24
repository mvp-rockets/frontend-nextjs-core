import NoResultFound from "../../molecules/NoResultFound";
import React from "react";

export default {
  title: "molecules/NoResultFound",
  component: NoResultFound,
};

const Template = (args) => <NoResultFound {...args} />;

export const NoComment = Template.bind({});
NoComment.args = {
  iconSrc: "/images/icons/chat.svg",
  iconWidth: 78,
  iconHeight: 78,
  iconAlt: "chart",
  heading: "There are no comments",
  subHeading: "Be the first One to comment on the post",
};

export const NoLike = Template.bind({});
NoLike.args = {
  iconSrc: "/images/icons/heart.svg",
  iconWidth: 78,
  iconHeight: 78,
  iconAlt: "like",
  heading: "There are no likes yet",
};

export const NoPost = Template.bind({});
NoPost.args = {
  iconSrc: "/images/icons/reshare.svg",
  iconWidth: 78,
  iconHeight: 78,
  iconAlt: "re share",
  heading: "No one has reshared yet",
};