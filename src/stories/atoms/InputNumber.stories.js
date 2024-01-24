import InputNumber from "../../atoms/InputNumber";
export default {
  title: "Atoms/InputNumber",
  component: InputNumber,
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};
const Template = (args) => <InputNumber {...args} />;
export const Small = Template.bind({});
Small.args = {
  disable: false,
  size:'small'
};

export const Medium = Template.bind({});
Medium.args = {
  disable: false,
  size:'medium'
};

export const Large = Template.bind({});
Large.args = {
  disable: false,
  size:'large'
};