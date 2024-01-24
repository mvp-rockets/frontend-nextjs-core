import Logo from "../../atoms/Logo";

export default {
  title: "Atoms/Logo",
  component: Logo,
};

const imgUrl =  '/images/logo.svg';

const Template = (args) => <Logo {...args} />;

export const logo= Template.bind({});
logo.args = {
    src:imgUrl,
    className: '',
    width:'149',
    height:'40',
    alt:'MVP Rockets',
};

