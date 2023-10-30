import React from "react";
import QuizOption from "../../atoms/QuizOption";

export default {
  title: "Atoms/QuizOption",
  component: QuizOption,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "correct", "wrong"],
    },
  },
};

const Template = (args) => <QuizOption {...args} />;

export const quizOption = Template.bind({});
quizOption.args = {
  option: "A",
  optionText:
    "A firm’s products are introduced into the market faster than its competitors’ ",
  handleOption: () => {},
};
