import FileUpload from "../../molecules/FileUpload";

export default {
    title: "molecules/FileUploads",
    component: FileUpload,
};

const Template = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: "default",
    UploadSubText: "Upload",
    iconAlt: "Upload Icon",
    iconSrc: "/images/icons/plus-icon-b.svg",
    className: "",
};

export const uploadDrag = Template.bind({});
uploadDrag.args = {
    UploadLabel: "Click or drag file to this area to upload",
    UploadLabelStyle: "",
    UploadSubText: "Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files",
    UploadSubTextStyle: "",
    variant: "uploadDrag",
    iconAlt: "Upload Icon",
    iconSrc: "/images/icons/upload-grag.svg",
    className: "w-[395px] bg-neutral-100 border ",
};

export const uploadButton = Template.bind({});
uploadButton.args = {
    UploadLabel: "Click to Upload",
    UploadLabelStyle: "",
    variant: "uploadButton",
    iconAlt: "Upload Icon",
    iconSrc: "/images/icons/upload-icon.svg",
    className: "w-[155px] bg-red-500 border ",
};
