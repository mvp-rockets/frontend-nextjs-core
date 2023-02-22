import SearchBox from "../../atoms/SearchBox";

export default {
    title: "Atoms/SearchBar",
    component: SearchBox,
    argTypes: {
        iconPosition: {
            control: "select",
            options: ["left", "right",],
        },
        variant: {
            control: "select",
            options: ["Default", "Small", "Large"],
        },
    },
};


const Template = (args) => <SearchBox {...args} />;

export const SearchBar = Template.bind({});
SearchBar.args = {
    register: () => { },
    onClearSearch: () => { },
    clearSearchIcon: true,
};

