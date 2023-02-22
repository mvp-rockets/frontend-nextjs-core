import React from "react";
import PostFooter from "../../../molecules/post/PostFooter";

export default {
    title: "molecules/Post/PostFooterSection",
    component: PostFooter,
};

const Template = (args) => {
    return <PostFooter {...args} />
};

export const PostFooterSection = Template.bind({});
PostFooterSection.args = {
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
}
