import React from "react";
import Login from "../../templates/LoginWithGoogleTemplate";

export default {
    title: "templates/Login",
    component: Login,
};

const Template = (args) => <Login {...args} />;

export const login = Template.bind({});
login.args = {};
