import Dropdown from "../../atoms/Dropdown";
export default {
  title: "Atoms /Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Dropdowns = Template.bind({});
Dropdowns.args = {
    id: "selectbox",
    name: "select",
    placeholder: "Select From List",
    isDisable: false,
    isSearchable: true,
    isClearable: true,
    autofocus: false,
    readonly: false,
    required: false,
    isLabel: true,
    labelText: 'Enter Label',
    labelFor: 'Input',
    disableClass: '',
    options: [
        { value: 'fox', label: 'Fox' },
        { value: 'Butterfly', label: 'Butterfly' },
        { value: 'Honeybee', label: 'Honeybee' }      ],
};