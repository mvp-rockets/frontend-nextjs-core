import RangeSlider from "../../atoms/RangeSlider";

export default {
  title: "Atoms/RangeSliders",
  component: RangeSlider,
};

const Template = (args) => <RangeSlider {...args} />;

export const RangeSliders = Template.bind({});
RangeSliders.args = {
  step: 1,
  min: 0,
  max: 200,
  label: "years",
  colorFrom: "#D1D1DB",
  colorTo: "#1E3A8A",
};
