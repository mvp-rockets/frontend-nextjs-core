import React from "react";
import Comment from "../../../molecules/comment/Comment";

export default {
    title: "molecules/Comment/Comments",
    component: Comment,
};

const Template = (args) => {
    return <Comment {...args} />
};

export const Comments = Template.bind({});
Comments.args = {
    profileImg: '/images/profile.jpg',
    profileName: "James Saris",
    profileId: "@Hugo_197",

    lists: [
        {
            item: "Edit",
            link: "",
            listIconSrc: "../images/icons/edit-square.svg",
            listIconWidth: "18",
            listIconHeight: "18",
            listIconAlt: "edit icon"
        },
        {
            item: "Delete",
            link: ``,
            listIconSrc: "/images/icons/delete.svg",
            listIconWidth: "18",
            listIconHeight: "18",
            listIconAlt: "Delete icon",
            onClick: (e) => { }
        },
    ],
    content: `
    <p class="text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <img class='rounded-lg' src="/images/demo.jpg" width="310" height="162" alt="" />`,
    time: "46min ago",
    likeNum: "6"
}
