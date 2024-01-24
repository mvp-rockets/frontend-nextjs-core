import AlertModal from "../../organisms/AlertModal";

export default {
  title: "organisms/AlertModal",
  component: AlertModal,
};

const Template = (args) => <AlertModal {...args} />;

export const deleteModal = Template.bind({});
deleteModal.args = {
  show: true,
  heading: "Are you sure delete this task?",
  subHeading: "Some contents...",
  icon: {
    src: '/images/icons/warning-icon.svg',
    width: 20,
    height: 20,
    alt: ''
  },
};

export const infoModal = Template.bind({});
infoModal.args = {
  show: true,
  heading: "This is some info",
  subHeading: "Some contents...",
  icon: {
    src: '/images/icons/warning-icon.svg',
    width: 20,
    height: 20,
    alt: ''
  },
};

export const errorModal = Template.bind({});
errorModal.args = {
  show: true,
  heading: "This is an error message",
  subHeading: "Some contents...Some contents...",
  icon: {
    src: '/images/icons/warning-icon.svg',
    width: 20,
    height: 20,
    alt: ''
  },
};

export const WarningModal = Template.bind({});
WarningModal.args = {
  show: true,
  heading: "This is a warning message",
  subHeading: "Some contents...Some contents",
  icon: {
    src: '/images/icons/warning-icon.svg',
    width: 20,
    height: 20,
    alt: ''
  },
};

export const successModal = Template.bind({});
successModal.args = {
  show: true,
  heading: "Some task has completed!",
  subHeading: "Some contents...",
  icon: {
    src: '/images/icons/warning-icon.svg',
    width: 20,
    height: 20,
    alt: ''
  },
};
