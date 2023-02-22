import React from "react";
import AlertModal from "../../organisms/AlertModal";

export default {
  title: "organisms/AlertModals",
  component: AlertModal,
  args: {
    modalIcon: {
      control: "select",
      options: ["warning-outline", "info-outline", "error-outline", "success-outline"],
    },
  }
};

const Template = (args) => <AlertModal {...args} />;

export const AlertModals = Template.bind({});
AlertModals.args = {
  modalIcon: "warning-outline",
  showModal: true,
  modalHeading: "Are you sure delete this task?",
  modalSubHeading: "Some contents...",
  modalSecondaryBtn: true,
  cancelLabel: "No",
  primaryBtnLabel: "Yes",
};