import React from "react";
import Like from "../../organisms/Like";

export default {
  title: "organisms/Likes",
  component: Like,
};

const Template = (args) => <Like {...args} />;

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

export const Likes = Template.bind({});
Likes.args = {
  profileList,
  num: "1,258"
};
