import InputBox from "../../atoms/InputBox";
export default {
    title: "Atoms/InputBox",
    component: InputBox,
    argTypes: {
        type: {
            control: "select",
            options: ["text", "password", "number", "email", "tel", "date", "time","url","hidden"],
        },
    },
};

const Template = (args) => <InputBox {...args} />;

export const Default = Template.bind({});
Default.args = {
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


export const Small = Template.bind({});
Small.args = {
    id: "name",
    name: "name",
    type: "text",
    placeholder: "Enter Your Name",
    disabled: false,
    autofocus: false,
    readonly: false,
    required: false,
    register: () => true,
    variant: "Small",
    isLabel: true,
    labelText: 'Enter Label',
    labelFor: 'Input'
};


export const Large = Template.bind({});
Large.args = {
    id: "name",
    name: "name",
    type: "text",
    placeholder: "Enter Your Name",
    disabled: false,
    autofocus: false,
    readonly: false,
    required: false,
    register: () => true,
    variant: "Large",
    isLabel: true,
    labelText: 'Enter Label',
    labelFor: 'Input'
};