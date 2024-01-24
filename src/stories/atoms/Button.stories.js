import Button from "../../atoms/Button";

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: 'Edit Profile',
  style: 'primary',
  size: 'medium',
  icon: '/images/icons/plus-outline.svg',
  iconPosition: 'left',
};

export const GhostButton = Template.bind({});
GhostButton.args = {
  label: 'Cancel',
  style: 'ghost',
  size: 'medium',
  icon: '/images/icons/plus-outline.svg',
  iconPosition: 'left',
};

export const BorderLess = Template.bind({});
BorderLess.args = {
  label: 'Cancel',
  style: 'borderLess',
  size: 'medium',
  icon: '/images/icons/plus-outline.svg',
  iconPosition: 'left',
};

export const IconButton = Template.bind({});
IconButton.args = {
  style: 'primary',
  size: 'medium',
  icon: '/images/icons/plus-outline.svg',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  label: 'Follow',
  style: 'primary',
  size: 'medium',
  disabled: true,
};
