import Image from "next/image";
import React from "react";
import Text from "../../../atoms/Text";
import CommentBody from "../../../molecules/comment/CommentBody";

export default {
    title: "molecules/Comment/CommentBodySection",
    component: CommentBody,
};

const Template = (args) => {
    return <CommentBody {...args} />
};

export const CommentBodySection = Template.bind({});
CommentBodySection.args = {
    content: `
            <p class="text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <img class='rounded-lg' src="/images/demo.jpg" width="310" height="162" alt="" />`

}
