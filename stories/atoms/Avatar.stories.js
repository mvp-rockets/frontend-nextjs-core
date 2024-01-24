import Avatar from "../../atoms/Avatar";

export default {
  title: "Atoms/Avatars",
  component: Avatar,
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large", "extraLarge"],
    },
    shape: {
      control: "select",
      options: ["normal", "square", "circle"],
    },
    badge: {
      control: "select",
      options: ["normal", "badge", "dot"],
    },
  },
};

const imgUrl = "/images/icons/profile.jpg";

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: "",
  imgSrc: imgUrl,
  title: "H",
};


export const WithBadge = Template.bind({});

WithBadge.args = {
  className: "",
  imgSrc: imgUrl,
  title: "H",
  badgeTxt: 15,
  badge: 'badge'
};

export const WithDot = Template.bind({});
WithDot.args = {
  className: "",
  imgSrc: imgUrl,
  title: "H",
  badgeTxt: 15,
  badge: "dot",
};