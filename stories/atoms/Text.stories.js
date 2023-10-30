import Text from "../../atoms/Text";

export default {
  title: "Atoms/Text",
  component: Text,
};

const Template = (args) => <Text {...args} />;

const commonArgs = {
  children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  fontWeight: ["font-thin", "font-hairline", "font-extralight","font-light", "font-normal", "font-medium","font-semibold", "font-bold", "font-extrabold","font-black"],
  variant: ["body", "bodySmall", "caption"],

};

export const body = Template.bind({});
body.args = {
  ...commonArgs,
  fontWeight:'font-normal',
  variant: "body",
  className:''
};

export const bodySmall = Template.bind({});
bodySmall.args = {
  ...commonArgs,
  variant: "bodySmall",
};

export const caption = Template.bind({});
caption.args = {
  ...commonArgs,
  variant: "caption",
};
