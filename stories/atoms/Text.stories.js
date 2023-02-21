import React from "react";
import Text from "../../atoms/Text";
export default {
  title: "Atoms /Texts",
  component: Text,
  argsType: {
    variant: {
      control: "select",
      options: ["body", "bodySmall", "caption"],
    },
  }
};

const Template = (args) => <Text {...args} />;

export const Texts = Template.bind({});
Texts.args = {
  children:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
};