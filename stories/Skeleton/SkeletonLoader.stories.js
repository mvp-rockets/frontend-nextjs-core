import React from "react";

import SkeletonLoader from "../../atoms/Skeleton/SkeletonLoader";


export default {
    title: "atoms/Skeleton/SkeletonLoader",
    component: SkeletonLoader,
};

const Template = (args) => <SkeletonLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: "medicineSummery",
    length: 1,
};

export const ClinicBlogSummery = Template.bind({});
ClinicBlogSummery.args = {
    type: "clinicBlogSummery",
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

export const ClinicSummery = Template.bind({});
ClinicSummery.args = {
    type: "clinicDoctorSummery",
    length: 1,
    isShowServices: true,
};

export const DoctorSummery = Template.bind({});
DoctorSummery.args = {
    type: "clinicDoctorSummery",
    length: 1,
};