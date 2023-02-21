import React from 'react';
import ProfileDetail from '../../organisms/ProfileDetail';

export default {
    title: 'organisms/ProfileDetails',
    component: ProfileDetail,
};

const Template = (args) => <ProfileDetail {...args} />;

export const ProfileDetails = Template.bind({});

ProfileDetails.args = {

    profileDetailBreadcrumb: [
        { name: "Therapist", path: "" },
        { name: "View Details", path: "" },
    ],
    profileData: {
        name: "Preeti Singh",
        designation: "Ph.D in Clinical Psychology, Diploma in Clinical Therapy",
        description: "Ritika is an Australian Board Certified and RCI certified Clinical Psychologist. A NIMHANS alumna , she has over 10 years experience in India and Australia. Her interest areas include therapy for mood and anxiety disorders, trauma and abuse, child and adolescent concerns, life directional concerns, as well as lifestyle disorders. In her work, she uses an eclectic approach with a focus on cognitive behavioral skills. She is also a certified Acceptance and Commitment Therapy (ACT) practitioner.",
        qualification: "Therapist",
        specialization: "Anxiety, Depression, Anger Issuem Relationships",
        language: "Hindi, English",
        fee: {
            normal: "₹700/Session",
            chat: "₹100/Chat Session",
        },
    },
    profileIcon: "/images/profile.png",
}