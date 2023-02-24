import React from "react";
import AddLectureTemplate from "../../templates/Lectures/AddLectureTemplate";

export default {
    title: "templates/Lectures/Add Lecture",
    component: AddLectureTemplate,
};

const Template = (args) => <AddLectureTemplate {...args} />;

export const addLecture = Template.bind({});
addLecture.args = {
    linkColor: "",
    activeLinkColor: "bg-white text-black rounded-md",
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
    data: [
        { name: "Home", path: "/home", isActive: false },
        { name: "services", path: "/Services", isActive: false },
        { name: "painting", path: "/Painting", isActive: true },
    ],
};
