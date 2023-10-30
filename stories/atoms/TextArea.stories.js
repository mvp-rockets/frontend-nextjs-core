import TextArea from "../../atoms/TextArea";

export default {
  title: "Atoms/TextArea",
  component: TextArea,
};

const Template = (args) => <TextArea {...args} />;

export const largeTextarea = Template.bind({});
largeTextarea.args = {
  id: "name",
  name: "name",
  placeholder: "Placeholder",
  register: () => true,
  fontSize: "text-base",
  errorMessage: "Error Message"
};

export const defaultTextarea = Template.bind({});
defaultTextarea.args = {
  id: "name",
  name: "name",
  placeholder: "Placeholder",
  register: () => true,
  fontSize: "text-sm",
  errorMessage: "Error Message"
};
export const smallTextarea = Template.bind({});
smallTextarea.args = {
  id: "name",
  name: "name",
  placeholder: "Placeholder",
  register: () => true,
  fontSize: "text-xs",
  errorMessage: "Error Message"
};