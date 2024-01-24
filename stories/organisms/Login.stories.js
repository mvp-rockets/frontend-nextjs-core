import React from "react";
import Login from "../../organisms/Login";

export default {
  title: "organisms/Login",
  component: Login,
};

const Template = (args) => <Login {...args} />;

export const login = Template.bind({});
login.args = {
  createAccountLink: "https://www.google.com",
  loginText: "Login to your Account",
  notAccountText: "Do not have an account?",
  copyrightYear: '2022',
  companyName: "MVPRockets.",
  companyLink: 'https://mvprockets.com',
  createAccountText: "Create an account",
};
