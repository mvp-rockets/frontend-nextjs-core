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

export const ProgressBars = Template.bind({});
ProgressBars.args = {
  size: "default",
  value: "60%",
  style: "rounded",
};