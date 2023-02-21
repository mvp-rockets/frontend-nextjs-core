import React from "react";
import ProfilePopup from "../../../molecules/comment/ProfilePopup";

export default {
    title: "molecules/Comment/ProfilePopupSection",
    component: ProfilePopup,
};

const Template = (args) => {
    return <ProfilePopup {...args} />
};

export const ProfilePopupSection = Template.bind({});
const profileList = [
    {
        profileImg: '/images/icons/sbin.svg',
        profileName: "SBIN",
        profileId: "State bank of india",
    },
    {
        profileImg: '/images/icons/sbin.svg',
        profileName: "SBIN",
        profileId: "State bank of india",
    },
    {
        profileImg: '/images/icons/sbin.svg',
        profileName: "SBIN",
        profileId: "State bank of india",
    },
    {
        profileImg: '/images/icons/sbin.svg',
        profileName: "SBIN",
        profileId: "State bank of india",
    },
    {
        profileImg: '/images/icons/sbin.svg',
        profileName: "SBIN",
        profileId: "State bank of india",
    },
    {
        profileImg: '/images/icons/sbin.svg',
        profileName: "SBIN",
        profileId: "State bank of india",
    }
]

ProfilePopupSection.args = {
    profileList
}
