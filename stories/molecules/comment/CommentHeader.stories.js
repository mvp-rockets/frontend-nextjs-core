import React from "react";
import CommentHeader from "../../../molecules/comment/CommentHeader";

export default {
    title: "molecules/Comment/CommentHeaderSection",
    component: CommentHeader,
};

const Template = (args) => {
    return <CommentHeader {...args} />
};

export const CommentHeaderSection = Template.bind({});
CommentHeaderSection.args = {
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
    ]
}
