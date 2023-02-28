import React from "react";
import ViewLectureTemplate from "../../templates/Lectures/ViewLectureTemplate";

export default {
    title: "templates/Lectures/View Lecture",
    component: ViewLectureTemplate,
};

const Template = (args) => <ViewLectureTemplate {...args} />;

export const viewLecture = Template.bind({});
viewLecture.args = {
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
        { name: "LMS", path: "/home", isActive: false },
        { name: "Lectures", path: "/Services", isActive: true },
    ],
};
