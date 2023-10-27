import Tag from "../../atoms/Tag";

export default {
  title: "Atoms/Tag",
  component: Tag,
};

const Template = (args) => <Tag {...args} />;


const commonArgs = {
  title: "Edit Profile",
  size: "medium",
  icon: "/images/icons/plus-outline.svg",
  iconPosition: "left",
};

export const primary = Template.bind({});
primary.args = {
  ...commonArgs,
  style: "primary",
};

export const extendedPalette = Template.bind({});
extendedPalette.args = {
  ...commonArgs,
  style: "extendedPalette",
};

export const neutral = Template.bind({});
neutral.args = {
  ...commonArgs,
  style: "neutral",
};

export const light = Template.bind({});
light.args = {
  ...commonArgs,
  style: "light",
};

export const border = Template.bind({});
border.args = {
  ...commonArgs,
  style: "border",
};


export const borderLess = Template.bind({});
borderLess.args = {
  ...commonArgs,
  style: "borderLess",
};

