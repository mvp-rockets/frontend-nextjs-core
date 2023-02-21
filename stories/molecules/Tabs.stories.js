import React from "react";
import Tabs from "../../molecules/Tabs";

export default {
    title: "Molecules/Tabs",
    component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const horizontalJustified = Template.bind({});

horizontalJustified.args = {
    className: "py-4",
    tabs: [
        {
            id: 1,
            title: "Active",

            content:
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
        },
        { id: 2, title: "Item 2", content: "Hello" },
        {
            id: 3,
            title: "Item 3",

            content: "In publishing and graphic design, Lo without relying on meaningful content. ",
        },
        {
            id: 4,
            title: "Item 4",

            content:
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a  ying on meaningful content. ",
        },
        {
            id: 5,
            title: "Item 5",

            content: "In publishing and graphic design, Lorem mmonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
        },
        {
            id: 6,
            title: "Item 6",

            content: "In publishing and graphic design,  on meaningful content. ",
        },
    ],
    type: "horizontalJustified",
    tabContainerStyle: "p-5",
};

export const horizontalDefault = Template.bind({});

horizontalDefault.args = {
    className: "py-4",
    tabs: [
        {
            id: 1,
            title: "Active",

            content:
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
        },
        { id: 2, title: "Item 2", content: "Hello" },
        {
            id: 3,
            title: "Item 3",

            content: "In publishing and graphic design, Lo without relying on meaningful content. ",
        },
        {
            id: 4,
            title: "Item 4",

            content:
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a  ying on meaningful content. ",
        },
        {
            id: 5,
            title: "Item 5",

            content: "In publishing and graphic design, Lorem mmonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
        },
        {
            id: 6,
            title: "Item 6",

            content: "In publishing and graphic design,  on meaningful content. ",
        },
    ],
    type: "horizontalDefault",
    tabContainerStyle: "p-5",
};

export const horizontalFilled = Template.bind({});

horizontalFilled.args = {
    className: "py-4",
    tabs: [
        {
            id: 1,
            title: "Active",

            content:
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
        },
        { id: 2, title: "Item 2", content: "Hello" },
        {
            id: 3,
            title: "Item 3",

            content: "In publishing and graphic design, Lo without relying on meaningful content. ",
        },
        {
            id: 4,
            title: "Item 4",

            content:
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a  ying on meaningful content. ",
        },
        {
            id: 5,
            title: "Item 5",

            content: "In publishing and graphic design, Lorem mmonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
        },
        {
            id: 6,
            title: "Item 6",

            content: "In publishing and graphic design,  on meaningful content. ",
        },
    ],
    type: "horizontalFilled",
    tabContainerStyle: "p-5",
};

export const verticalFilled = Template.bind({});

verticalFilled.args = {
    className: "",
    tabs: [
        {
            id: 1,
            title: "Active",

            content:
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
        },
        { id: 2, title: "Item 2", content: "Hello" },
        {
            id: 3,
            title: "Item 3",

            content: "In publishing and graphic design, Lo without relying on meaningful content. ",
        },
        {
            id: 4,
            title: "Item 4",

            content:
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a  ying on meaningful content. ",
        },
        {
            id: 5,
            title: "Item 5",

            content: "In publishing and graphic design, Lorem mmonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
        },
        {
            id: 6,
            title: "Item 6",

            content: "In publishing and graphic design,  on meaningful content. ",
        },
    ],
    type: "verticalFilled",
    tabContainerStyle: "",
};

export const verticalRight = Template.bind({});

verticalRight.args = {
    className: "",
    tabs: [
        {
            id: 1,
            title: "Active",

            content:
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
        },
        { id: 2, title: "Item 2", content: "Hello" },
        {
            id: 3,
            title: "Item 3",

            content: "In publishing and graphic design, Lo without relying on meaningful content. ",
        },
        {
            id: 4,
            title: "Item 4",

            content:
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a  ying on meaningful content. ",
        },
        {
            id: 5,
            title: "Item 5",

            content: "In publishing and graphic design, Lorem mmonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
        },
        {
            id: 6,
            title: "Item 6",

            content: "In publishing and graphic design,  on meaningful content. ",
        },
    ],
    type: "verticalRight",
    tabContainerStyle: "",
};

export const verticalLeft = Template.bind({});

verticalLeft.args = {
    className: "",
    tabContainerStyle: "",
    tabs: [
        {
            id: 1,
            title: "Active",

            content:
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
        },
        { id: 2, title: "Item 2", content: "Hello" },
        {
            id: 3,
            title: "Item 3",

            content: "In publishing and graphic design, Lo without relying on meaningful content. ",
        },
        {
            id: 4,
            title: "Item 4",

            content:
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a  ying on meaningful content. ",
        },
        {
            id: 5,
            title: "Item 5",

            content: "In publishing and graphic design, Lorem mmonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
        },
        {
            id: 6,
            title: "Item 6",

            content: "In publishing and graphic design,  on meaningful content. ",
        },
    ],
    type: "verticalLeft",
};
