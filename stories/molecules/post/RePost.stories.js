import React from "react";
import RePost from "../../../molecules/post/RePost";

export default {
    title: "molecules/post/RePosts",
    component: RePost,
};

const Template = (args) => {
    return <RePost {...args} />
};

export const RePosts = Template.bind({});
RePosts.args = {
    profileImg: '/images/profile.jpg',
    profileName: "James Saris",
    profileId: "@Hugo_197",
    postFooterItem: [
        {
            title: "1.5K",
            iconSrc: "images/icons/heart-solid.svg",
            activeIconSrc: "images/icons/heart-active.svg",
            isActive: true,
        },
        {
            title: "130",
            iconSrc: "images/icons/chat-solid.svg",
            isActive: false,
        },
        {
            title: "3",
            iconSrc: "images/icons/reshare-solid.svg",
            isActive: false,
        },
        {
            title: "",
            iconSrc: "images/icons/share-solid.svg",
            isActive: false,
        },
    ],
    time: "2 hrs ago",

    content: `
    <p class="text-sm"><span class="text-info-200">#trading</span> In the month of December FII's were net sellers on 21 of the 23 trading days. But in the first week of January we can see they have been net buyers for 4 out of 5 days. One of the major reason for seeing this change is the January </p>
    <a class="text-info-200 mt-0.5 font-semibold text-sm">Read more</a>
    <img class='rounded-lg' src="/images/demo.jpg" width="310" height="162" alt="" />`,
    inputLength: 1,
    inputMaxLength: 300
}
