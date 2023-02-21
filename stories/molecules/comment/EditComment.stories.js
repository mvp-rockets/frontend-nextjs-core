import React from "react";
import EditComment from "../../../molecules/comment/EditComment";

export default {
    title: "molecules/Comment/EditCommentSection",
    component: EditComment,
};

const Template = (args) => {
    return <EditComment {...args} />
};

export const EditCommentSection = Template.bind({});
EditCommentSection.args = {
    lists: [
        {
            item: "Upload Image",
            link: "",
            listIconSrc: "../images/icons/image.svg",
            listIconWidth: "24",
            listIconHeight: "24",
            listIconAlt: "image",
            onClick: (e) => { }
        },
        {
            item: "Upload GIF",
            link: ``,
            listIconSrc: "/images/icons/gif.svg",
            listIconWidth: "24",
            listIconHeight: "24",
            listIconAlt: "gif",
            onClick: (e) => { }
        },
        {
            item: "Upload Video",
            link: ``,
            listIconSrc: "/images/icons/video.svg",
            listIconWidth: "24",
            listIconHeight: "24",
            listIconAlt: "video",
            onClick: (e) => { }
        },
        {
            item: "Camera",
            link: ``,
            listIconSrc: "/images/icons/camera.svg",
            listIconWidth: "24",
            listIconHeight: "24",
            listIconAlt: "camera",
            onClick: (e) => { }
        },
    ],
    value: "Hi @hugo_197 this #Trading long established fact that a reader will be distracted by             the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
}
