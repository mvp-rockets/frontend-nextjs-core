import React from "react";
import LearningCard from '../../organisms/LearningCard'

export default {
    title: "organisms/LearningCard",
    component: LearningCard,
};

const Template = (args) => <LearningCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    className: 'px-3 xxs:px-4 pt-2 xxs:pt-3 pb-4 xxs:pb-5',
    href: '/',
    image: '/images/webinar-default.svg',
    title: 'Experties in Gynaecology',
    duration: '3 hours 45 min',
    courseCount: 3,
    viewCount: 1700,
    likeCount: 1800,
    likes: 1800,
    flag: 'COMPLETED',
    onDownloadHandle: () => console.log('download handler')
}

export const LMS_Video_Card = Template.bind({});
LMS_Video_Card.args = {
    className: 'px-3 xxs:px-4 pt-2 xxs:pt-3 pb-3 xxs:pb-5',
    href: '/',
    image: '/images/webinar-default.svg',
    title: 'Experties in Gynaecology',
    duration: '3 hours 45 min',
    flag: 'COMPLETED',
    isVideoCard: true,
}