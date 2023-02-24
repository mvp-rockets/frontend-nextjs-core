import React from "react";
import AddSeo from "../../molecules/AddSeo";

export default {
    title: "molecules/AddSeo",
    component: AddSeo,
};

const Template = (args) => <AddSeo {...args} />;

export const addSeo = Template.bind({});

addSeo.args = {};
