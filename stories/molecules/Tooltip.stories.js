import Tooltip from "../../molecules/ToolTip";

export default {
  title: "Molecules/Tooltips",
  component: Tooltip,
  argTypes: {
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right", "topLeft", "topRight", "bottomLeft", "bottomRight"],
    },
  },
};
const Template = (args) => <Tooltip {...args} />;

export const Tooltips = Template.bind({});
Tooltips.args = {
  content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a doc",
  position: "bottom",
  title: "🤠",
};