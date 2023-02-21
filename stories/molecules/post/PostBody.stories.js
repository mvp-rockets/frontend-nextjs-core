import React from "react";
import PostBody from "../../../molecules/post/PostBody";

export default {
    title: "molecules/Post/PostBodySection",
    component: PostBody,
};

const Template = (args) => {
    return <PostBody {...args} />
};

export const PostBodySection = Template.bind({});
PostBodySection.args = {
    content: `
    <p class="text-sm"><span class="text-info-200">#trading</span> In the month of December FII's were net sellers on 21 of the 23 trading days. But in the first week of January we can see they have been net buyers for 4 out of 5 days. One of the major reason for seeing this change is the January </p>
    <a class="text-info-200 mt-0.5 font-semibold text-sm">Read more</a>
    <img class='rounded-lg' src="/images/demo.jpg" width="310" height="162" alt="" />`
}
