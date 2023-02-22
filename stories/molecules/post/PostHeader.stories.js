import React from "react";
import PostHeader from "../../../molecules/post/PostHeader";

export default {
    title: "molecules/Post/PostHeaderSection",
    component: PostHeader,
};

const Template = (args) => {
    return <PostHeader {...args} />
};

export const PostHeaderSection = Template.bind({});
PostHeaderSection.args = {
    profileImg: '/images/profile.jpg',
    profileName: "James Saris",
    profileId: "@Hugo_197",
    followed: false,
    time: "2 hrs ago"
}
