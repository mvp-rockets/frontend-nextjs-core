import React from "react";
import InputBox from "../../atoms/InputBox";
export default {
    title: "Atoms/InputBoxes",
    component: InputBox,
    argTypes: {
        type: {
            control: "select",
            options: ["text", "password", "number", "email", "tel", "date", "time"],
        },
        variant: {
            control: "select",
            options: ["Default", "Small", "Large"],
        },
    },
};

const Template = (args) => <InputBox {...args} />;

export const InputBoxes = Template.bind({});
InputBoxes.args = {
    id: "name",
    name: "name",
    type: "text",
    placeholder: "Enter Your Name",
    disabled: false,
    autofocus: false,
    readonly: false,
    required: false,
    register: () => true,
    variant: "Default",
    isLabel: true,
    labelText: 'Enter Label',
    labelFor: 'Input'
};