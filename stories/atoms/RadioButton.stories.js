import React from "react";
import RadioButton from "../../atoms/RadioButton";

export default {
    title: "atoms/RadioButtons",
    component: RadioButton,
};

const Template = (args) => <RadioButton {...args} />;

export const RadioButtons = Template.bind({});
RadioButtons.args = {
    data: [
        {
            id: "test1",
            name: "test",
            value: "test1",
            className: "",
            radioLabel: "Radio Button Text2",
            isSelected: true,
        },
        {
            id: "test1",
            name: "test",
            value: "test",
            className: "",
            radioLabel: "Radio Button Text",
        },
    ],

    handleChange: () => {},
    isError: false,
    radioDisable: false,
};
