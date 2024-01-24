import MenuList from '../../atoms/MenuList';

export default {
	title: "Atoms/MenuList",
	component: MenuList,
};

const Template = (args) => <MenuList {...args} />;

export const Menulist = Template.bind({});

Menulist.args = {
    className: '',
	menuItem: [
		{ title: "All Features", href:'', isActive: true },
		{ title: "API Services", href:'', isActive: false},
		{ title: "Extra", href:'', isActive: false},
	],
};

