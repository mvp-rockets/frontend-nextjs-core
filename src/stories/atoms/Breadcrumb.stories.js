import Breadcrumb from "../../atoms/Breadcrumb";

export default {
  title: "Atoms/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    divider: {
      control: "select",
      options: ["slash", "arrow"],
    },
  },
};

const Template = (args) => <Breadcrumb {...args} />;

export const breadcrumb = Template.bind({});

breadcrumb.args = {
  data: [
    { name: "Home", path: "/home", isActive: false },
    { name: "About", path: "/Services", isActive: false },
    { name: "Services", path: "/Painting", isActive: true },
    { name: "Portfolio", path: "/Painting", isActive: true },
    { name: "FAQs", path: "/Services", isActive: false },
    { name: "Register", path: "/Painting", isActive: true },
    { name: "Contact", path: "/Services", isActive: false },
  ],
};
