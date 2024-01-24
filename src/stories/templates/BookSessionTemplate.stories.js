import React from 'react';
import BookSessionTemplate from '../../templates/BookSessionTemplate';

export default {
  title: 'templates/BookSessionTemplate',
  component: BookSessionTemplate,
};

const Template = (args) => <BookSessionTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  bookSessionBreadcrumb: [
    { name: "Therapist", path: "" },
    { name: "View Details", path: "" },
    { name: "Ritika Bhalla Bhutani", path: "" },
  ],
  bookSessionTabs: [
    { title: "BOOK A SESSION", active: true },
    { title: "BOOK A CHAT SESSION", active: false },
  ],
  timeSlot: [
    { time: "02:00pm" },
    { time: "03:00pm" },
    { time: "04:00pm" },
    { time: "05:00pm" },
    { time: "06:00pm" },
    { time: "07:00pm" },
    { time: "08:00pm" },
    { time: "09:00pm" },
    { time: "10:00pm" },
  ]
}