import React from 'react';
import Navbar from '../../molecules/Navbar';

export default {
  title: 'molecules/Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});

Default.args = {
    cardPadding:"px-8 py-5",
    shadow:"shadow-nav",
    logo: '/images/logo.svg',
    logoAlt: 'MVPRockets',
    logoHeight :'40',
    logoWidth : '140',
    menuItem: [
      { title: "All Features", active: true, },
      { title: "API Services", active: false, },
    ],
};