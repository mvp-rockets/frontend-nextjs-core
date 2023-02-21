import React from "react";
import Scheduler from "../../molecules/Scheduler";

export default {
  title: "molecules/Scheduler",
  component: Scheduler,
};

const Template = (args) => <Scheduler {...args} />;

export const Schedulers = Template.bind({});

const tagList = [
  {
    "date": "1 Oct 2022",
    "times": [
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
    ]
  },
  {
    "date": "1 Nov 2022",
    "times": [
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
    ]
  },
  {
    "date": "1 Dec 2022",
    "times": [
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
      { time: "11:30 - 13:30" },
    ]
  }
]

Schedulers.args = {
  tagList,
  headingText: 'Manage Recurring Schedules',
  subHeading: 'Breif explanation of what the feature is about.',
};

