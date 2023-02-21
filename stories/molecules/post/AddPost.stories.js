import React from "react";
import AddPost from "../../../molecules/post/AddPost";

export default {
    title: "molecules/post/AddPosts",
    component: AddPost,
};

const Template = (args) => {
    return <AddPost {...args} />
};

export const AddPosts = Template.bind({});
AddPosts.args = {
    profileImg: '/images/profile.jpg',
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
    inputLength: 45,
    inputMaxLength: 300
}
