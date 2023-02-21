import React from "react";
import MenuList from '../../atoms/MenuList';

export default {
	title: "Atoms/Menulists",
	component: MenuList,
};

const Template = (args) => <MenuList {...args} />;

export const Menulists = Template.bind({});

Menulists.args = {
	className: '',
	listClass: '',
	menuItem: [
		{ title: "All Features", isActive: true },
		{ title: "API Services", isActive: false },
		{ title: "Extra", isActive: false },
	],
};

