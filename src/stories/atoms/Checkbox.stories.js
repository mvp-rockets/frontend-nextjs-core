import Checkbox from "../../atoms/Checkbox";

export default {
  title: "atoms/Checkboxs",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Checkboxs = Template.bind({});
Checkboxs.args = {
  id: "test",
  name: "test",
  className: "",
  handleChange: () => {},
  isSelected: false,
  isError: false,
  checkBoxDisable: false,
  value: "test",
  checkBoxLabel: "Checkbox Text",
};
