import LinkButton from "../../atoms/LinkButton";
export default {
  title: "Atoms /LinkButton",
  component: LinkButton,
  argTypes: {
    variant: {
      control: "select",
      options: ["body", "bodySmall", "caption"],
    },
    fontWeight: {
      control: "select",
      options: ["font-thin", "font-hairline", "font-extralight", "font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold", "font-black"],
    },
  },
};

const Template = (args) => <LinkButton {...args} />;

export const linkButton = Template.bind({});
linkButton.args = {
  children: "This is Link",
  variant: "body",
  href: "",
  className: "",
  fontWeight: "font-normal",
};
