import VerticalMenu from '../../atoms/VerticalMenu';

export default {
	title: "Atoms/VerticalMenu",
	component: VerticalMenu,
};

const Template = (args) => <VerticalMenu {...args} />;

export const VerticalMenus = Template.bind({});

VerticalMenus.args = {
    className: '',
    listMainClass: '',
	listItemClass: '',
	menuItems: [
		{ title: "Scheduler", isActive: true },
		{ title: "LMS", isActive: false },
		{ title: "Extra", isActive: false },
	],
};

