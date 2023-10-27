
import SkeletonLoader from "../../atoms/Skeleton/SkeletonLoader";


export default {
    title: "atoms/Skeleton/SkeletonLoader",
    component: SkeletonLoader,
};

const Template = (args) => <SkeletonLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: "medicineSummary",
    length: 1,
};

export const ClinicBlogSummary = Template.bind({});
ClinicBlogSummary.args = {
    type: "clinicBlogSummary",
    length: 1,
};

export const youtubeCard = Template.bind({});
youtubeCard.args = {
    type: "youtubeCard",
    length: 1,
};

export const FeedCard = Template.bind({});
FeedCard.args = {
    type: "feedCard",
    length: 1,
};

export const ClinicSummary = Template.bind({});
ClinicSummary.args = {
    type: "clinicDoctorSummary",
    length: 1,
    isShowServices: true,
};

export const DoctorSummary = Template.bind({});
DoctorSummary.args = {
    type: "clinicDoctorSummary",
    length: 1,
};