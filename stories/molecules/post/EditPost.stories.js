import React from "react";
import EditPost from "../../../molecules/post/EditPost";

export default {
    title: "molecules/post/EditPosts",
    component: EditPost,
};

const Template = (args) => {
    return <EditPost {...args} />
};

export const EditPosts = Template.bind({});
EditPosts.args = {
    profileImg: '/images/profile.jpg',
    content: `
    <p class="text-sm"><span class="text-info-200">#trading</span> In the month of December FII's were net sellers on 21 of the 23 trading days. But in the first week of January we can see they have been net buyers for 4 out of 5 days. One of the major reason for seeing this change is the January </p>`,
    uploadImgSrc: "/images/demo-img.jpg",
    uploadImgWidth: "80",
    uploadImgHeight: "80",
    uploadImgAlt: "demo",
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
