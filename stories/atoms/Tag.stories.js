import Tag from "../../atoms/Tag";
export default {
  title: "Atoms /Tags",
  component: Tag,
};
const Template = (args) => <Tag {...args} />;

export const Tags = Template.bind({});
Tags.args = {
  title: "Label",
};
