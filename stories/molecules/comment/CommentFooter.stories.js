import React from "react";
import CommentFooter from "../../../molecules/comment/CommentFooter";

export default {
    title: "molecules/Comment/CommentFooterSection",
    component: CommentFooter,
};

const Template = (args) => {
    return <CommentFooter {...args} />
};

export const CommentFooterSection = Template.bind({});
CommentFooterSection.args = {
    time: "46min ago",
    likeNum: "6"
}
