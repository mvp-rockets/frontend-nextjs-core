import React from 'react';
import IconWithText from '../../molecules/IconWithText';

export default {
  title: 'molecules/IconWithTexts',
  component: IconWithText,
};

const Template = (args) => <IconWithText {...args} />;

export const IconWithTexts = Template.bind({});

IconWithTexts.args = {
  isActive: false,
  iconSrc: "/images/icons/heart-solid.svg",
  activeIconSrc: "/images/icons/heart-active.svg",
  title: "1.5K",
  onclick: () => { }
};