import Label from "../../atoms/Label";

export default {
  title: "Atoms/Label",
  component: Label,
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    fontWeight: {
      control: "select",
      fontWeight: ["font-thin", "font-hairline", "font-extralight","font-light", "font-normal", "font-medium","font-semibold", "font-bold", "font-extrabold","font-black"],
    },
  },
};

const Template = (args) => <Label {...args} />;

export const label = Template.bind({});
label.args = {
  variant: "small",
  labelFor: "name",
  children: "Small Label",
  textColor: "text-neutral-900",
  fontWeight: "font-bold",
  className: "",
  labelDisable: false,
};
