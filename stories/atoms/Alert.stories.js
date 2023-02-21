import React from "react";
import Alert from "../../atoms/Alert";

export default {
  title: "Atoms/Alert",
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const infoAlert = Template.bind({});
infoAlert.args = {
  children: "This is an Alert-error",
  variant: "infoAlert",
};

export const errorAlert = Template.bind({});
errorAlert.args = {
  children: "This is an alert-success",
  variant: "errorAlert",
};

export const successAlert = Template.bind({});
successAlert.args = {
  children: "This is an alert-warning",
  variant: "successAlert",
};

export const warningAlert = Template.bind({});
warningAlert.args = {
  children: "This is an alert-warning",
  variant: "warningAlert",
};

export const infoAlertLight = Template.bind({});
infoAlertLight.args = {
  children: "This is an alert-info",
  variant: "infoAlertLight",
};

export const errorAlertLight = Template.bind({});
errorAlertLight.args = {
  children: "This is an Alert-error",
  variant: "errorAlertLight",
};

export const successAlertLight = Template.bind({});
successAlertLight.args = {
  children: "This is an alert-success",
  variant: "successAlertLight",
};

export const warningAlertLight = Template.bind({});
warningAlertLight.args = {
  children: "This is an alert-warning",
  variant: "warningAlertLight",
};
