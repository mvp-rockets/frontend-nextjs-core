import React from "react";
import Modal from "../../organisms/Modal";

export default {
  title: "organisms/ModalPopup",
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const ModalPopup = Template.bind({});
ModalPopup.args = {
  id: "modalPopup",
  showModal: true,
  children: "Welcome",
  cardWidth: "max-w-3xl",
  modalSecondaryBtn: true,
  modalFooter: false
};

export const BaseModal = Template.bind({});
BaseModal.args = {
  id: "baseModal",
  showModal: true,
  children: "Welcome",
  cardWidth: "max-w-xl",
  modalTitle: "Basic Modal",
  modalSecondaryBtn: true,
  modalFooter: true,
  modalBodyClass: "text-center",
  baseModal: true,
  cardPadding: 0,
};

export const DeleteComment = Template.bind({});
DeleteComment.args = {
  id: "deleteComment",
  cardRadius: "rounded",
  showModal: true,
  closeIcon: false,
  children: "Delete the comment?",
  cardWidth: "max-w-md",
  modalSecondaryBtn: true,
  btnAlignment: "justify-center",
  modalBodyClass: "text-center"
};