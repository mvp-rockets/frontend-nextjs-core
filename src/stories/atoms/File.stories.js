import React from "react";
import File from "../../atoms/File";

export default {
  title: "Atoms/File",
  component: File,
};

const Template = (args) => <File {...args} />;

export const file = Template.bind({});
file.args = {
  title: "Fundamentals of Design & strategy",
  fileType: "pdf",
};
