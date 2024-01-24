import RadioButton from "../../atoms/RadioButton";

export default {
  title: "atoms/RadioButtons",
  component: RadioButton,
};

const Template = (args) => <RadioButton {...args} />;

export const RadioButtons = Template.bind({});
RadioButtons.args = {
  id: "test",
  name: "test",
  className: "",
  handleChange: () => {},
  isSelected: false,
  isError: false,
  radioDisable: false,
  value: "test",
  radioLabel: "Radio Button Text",
};
