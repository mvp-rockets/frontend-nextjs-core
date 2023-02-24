import AddLecture from "../../organisms/lectures/AddLecture";
export default {
    title: "Organisms/Lecture/Add Lecture",
    component: AddLecture,
};
const Template = (args) => <AddLecture {...args} />;

export const addLecture = Template.bind({});

addLecture.args = {
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
