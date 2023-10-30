import Steps from "../../molecules/Steps";
export default {
  title: "Molecules /Step",
  component: Steps,
  argTypes: {
    view: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    types: {
      control: "select",
      options: ["icon", "noIcon", "empty"],
    },
    position: {
      control: "select",
      options: ["top", "bottom"],
    },
  },
};

const Template = (args) => <Steps {...args} />;

const stepListData = [
  {
    stepNum: "1",
    title: `Past Step`,
    status: "completed"
  },
  {
    stepNum: "2",
    title: `Active Step`,
    status: "current"
  },
  {
    stepNum: "3",
    title: `Next Step`,
    status: "notStated"
  },
];

export const Step = Template.bind({});
Step.args = {
  stepListData,
  view: "horizontal",
  types: "icon",
  position: "bottom"
};
