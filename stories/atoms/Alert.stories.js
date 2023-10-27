import Alert from "../../atoms/Alert";

export default {
  title: "Atoms/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "info",
        "error",
        "success",
        "warning",
        "infoLight",
        "errorLight",
        "successLight",
        "warningLight",
      ],
    },
  },
};

const Template = (args) => <Alert {...args} />;

export const alert = Template.bind({});
alert.args = {
  children: "This is an Alert-error",
  variant: "info",
};
