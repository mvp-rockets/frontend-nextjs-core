import Tabs from "../../molecules/Tabs";

export default {
  title: "Molecules/Tabs",
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const horizontalJustified = Template.bind({});

horizontalJustified.args = {
  className: "",
  tabs: [
    { title: "Active", active: true },
    { title: "Item 2", active: false },
    { title: "Item 3", active: false },
    { title: "Item 4", active: false },
    { title: "Item 5", active: false },
    { title: "Item 6", active: false },
  ],
  type: "horizontalJustified",
};

export const horizontalDefault = Template.bind({});

horizontalDefault.args = {
  className: "",
  tabs: [
    { title: "Active", active: true },
    { title: "Item 2", active: false },
    { title: "Item 3", active: false },
    { title: "Item 4", active: false },
    { title: "Item 5", active: false },
    { title: "Item 6", active: false },
  ],
  type: "horizontalDefault",
};

export const horizontalFilled = Template.bind({});

horizontalFilled.args = {
  className: "",
  tabs: [
    { title: "Active", active: true},
    { title: "Item 2", active: false },
    { title: "Item 3", active: false },
    { title: "Item 4", active: false },
    { title: "Item 5", active: false },
    { title: "Item 6", active: false },
  ],
  type: "horizontalFilled",
};

export const verticalFilled = Template.bind({});

verticalFilled.args = {
  className: "",
  tabs: [
    { title: "Item 1", active: false},
    { title: "Item 2", active: false },
    { title: "Item 3", active: false },
    { title: "Active", active: true },
    { title: "Item 5", active: false },
    { title: "Item 6", active: false },
  ],
  type: "verticalFilled",
};

export const verticalRight = Template.bind({});

verticalRight.args = {
  className: "",
  tabs: [
      { title: "Active", active: true},
      { title: "Item 2", active: false },
      { title: "Item 3", active: false },
      { title: "Item 4", active: false },
      { title: "Item 5", active: false },
      { title: "Item 6", active: false },
  ],
  type: "verticalRight",
};

export const verticalLeft = Template.bind({});

verticalLeft.args = {
  className: "",
  tabs: [
      { title: "Active", active: true},
      { title: "Item 2", active: false },
      { title: "Item 3", active: false },
      { title: "Item 4", active: false },
      { title: "Item 5", active: false },
      { title: "Item 6", active: false },
  ],
  type: "verticalLeft",
};