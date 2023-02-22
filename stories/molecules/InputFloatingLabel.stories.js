import AnimatedInputLabel from "../../molecules/AnimatedInputLabel";

export default {
  title: "Molecules/AnimatedInputLabels",
  component: AnimatedInputLabel,
};

const Template = (args) => <AnimatedInputLabel {...args} />;

export const AnimatedInputLabels = Template.bind({});
AnimatedInputLabels.args = {
  inputId: "floating",
  labelTitle: "Floating Input",
};
