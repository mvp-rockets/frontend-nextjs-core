import React from "react";
import RePostList from "../../organisms/RePostList";

export default {
  title: "organisms/RePostLists",
  component: RePostList,
};

const Template = (args) => <RePostList {...args} />;

const profileList = [
  {
    profileImg: '/images/profile.jpg',
    profileName: "James Saris",
    profileId: "@Hugo_197",
    followed: false,
  },
  {
    profileImg: '/images/profile.jpg',
    profileName: "James Saris",
    profileId: "@Hugo_197",
    followed: true,
  },
  {
    profileImg: '/images/profile.jpg',
    profileName: "James Saris",
    profileId: "@Hugo_197",
    followed: false,
  },
  {
    profileImg: '/images/profile.jpg',
    profileName: "James Saris",
    profileId: "@Hugo_197",
    followed: true,
  },
  {
    profileImg: '/images/profile.jpg',
    profileName: "James Saris",
    profileId: "@Hugo_197",
    followed: false,
  },
  {
    profileImg: '/images/profile.jpg',
    profileName: "James Saris",
    profileId: "@Hugo_197",
    followed: true,
  },
  {
    profileImg: '/images/profile.jpg',
    profileName: "James Saris",
    profileId: "@Hugo_197",
    followed: false,
  },
  {
    profileImg: '/images/profile.jpg',
    profileName: "James Saris",
    profileId: "@Hugo_197",
    followed: true,
  }
]

export const RePostLists = Template.bind({});
RePostLists.args = {
  profileList,
  num: 3
};
