import UploadImagePreview from "../../molecules/UploadImagePreview";

export default {
  title: "Molecules/UploadImagePreviews",
  component: UploadImagePreview,
};
const Template = (args) => <UploadImagePreview {...args} />;

export const UploadImagePreviews = Template.bind({});
UploadImagePreviews.args = {
  imgSrc: "/images/demo-img.jpg",
  imgWidth: "80",
  imgHeight: "80"
};