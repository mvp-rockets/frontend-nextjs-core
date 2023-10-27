import ProgressBar from "../../atoms/ProgressBar";

export default {
  title: "Atoms/ProgressBars",
  component: ProgressBar,
  argTypes: {
    style: {
      control: "select",
      options: ["rounded", "soft", "sharp"],
    },
    size: {
      control: "select",
      options: ["default", "small"],
    },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Rounded = Template.bind({});
Rounded.args = {
  size: "default",
  value: "60%",
  style: "rounded",
};

export const Soft = Template.bind({});
Soft.args = {
  size: "default",
  value: "60%",
  style: "soft",
};

export const Sharp = Template.bind({});
Sharp.args = {
  size: "default",
  value: "60%",
  style: "sharp",
};
