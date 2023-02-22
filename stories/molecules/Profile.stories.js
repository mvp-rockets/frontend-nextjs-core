import React from 'react';
import Profile from '../../molecules/Profile';

export default {
  title: 'molecules/Profiles',
  component: Profile,
};

const Template = (args) => <Profile {...args} />;

export const Profiles = Template.bind({});

Profiles.args = {
  profileImg: '/images/profile.jpg',
  profileName: "James Saris",
  profileId: "@Hugo_197",
  time: "2 hrs ago",
  followed: false,
  isButton: false,
  isButtonTypeFloat: true
};