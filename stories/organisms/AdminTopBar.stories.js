import AdminTopBar from "../../organisms/AdminTopBar";
export default {
    title: "Organisms/Admin TopBar",
    component: AdminTopBar,
};
const Template = (args) => <AdminTopBar {...args} />;

export const adminTopBar = Template.bind({});

adminTopBar.args = {
    breadcrumb: [
        {
            isActive: false,
            name: "LMS",
            path: "#",
        },
        {
            isActive: false,
            name: "Lectures",
            path: "#",
        },
        {
            isActive: true,
            name: "Add Lecture",
            path: "#",
        },
    ],
};
