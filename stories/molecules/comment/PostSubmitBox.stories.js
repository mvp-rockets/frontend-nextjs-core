import React from "react";
import PostSubmitBox from "../../../molecules/comment/PostSubmitBox";

export default {
    title: "molecules/Comment/PostSubmitBoxSection",
    component: PostSubmitBox,
};

const Template = (args) => {
    return <PostSubmitBox {...args} />
};

export const PostSubmitBoxSection = Template.bind({});
PostSubmitBoxSection.args = {
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
    ]
}
