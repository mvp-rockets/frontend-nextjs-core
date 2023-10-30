import DatePicker from "../../atoms/DatePicker";

export default {
  title: "atoms/DatePicker",
  component: DatePicker,
};

const Template = (args) => <DatePicker {...args} />;

export const datePicker = Template.bind({});
datePicker.args = {
  id: "name",
  name: "name",
  placeholder: "DD/MM/YY",
  register: () => true,
  autocomplete: 'off',
  autofocus: false,
  isDisabled: false,
  isRequired: false,
 };