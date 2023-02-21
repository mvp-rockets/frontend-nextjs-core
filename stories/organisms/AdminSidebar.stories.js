import AdminSidebar from "../../organisms/AdminSidebar";
export default {
    title: "Organisms/Admin Sidebar",
    component: AdminSidebar,
};
const Template = (args) => <AdminSidebar {...args} />;

export const adminSidebar = Template.bind({});

adminSidebar.args = {
    linkColor: "text-white",
    activeLinkColor: "",
    linkHoverBgColor: "bg-primary-100",
    linkHoverColor: "text-primary-900",
    menuItems: [
        {
            submenu: [
                {
                    title: "Lectures",
                    url: "#",
                },
                {
                    title: "Topics",
                    url: "#",
                },
                {
                    title: "Courses",
                    url: "#",
                },
                {
                    title: "Categories",
                    url: "#",
                },
                {
                    title: "Instructors",
                    url: "#",
                },
                {
                    title: "Learners",
                    url: "#",
                },
            ],
            title: "LMS",
            url: "#",
        },
        {
            submenu: [
                {
                    title: "Submenu",
                    url: "#",
                },
            ],
            title: "Exercises/Quizzes",
            url: "#",
        },
        {
            submenu: [
                {
                    title: "Submenu",
                    url: "#",
                },
            ],
            title: "Course Discussion",
            url: "#",
        },
        {
            submenu: [
                {
                    title: "Submenu",
                    url: "#",
                },
            ],
            title: "Settings",
            url: "#",
        },
    ],
};
