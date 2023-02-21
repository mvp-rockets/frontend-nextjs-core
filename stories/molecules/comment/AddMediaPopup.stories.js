import React from "react";
import AddMediaPopup from "../../../molecules/comment/AddMediaPopup";

export default {
    title: "molecules/Comment/AddMediaPopupSection",
    component: AddMediaPopup,
};

const Template = (args) => {
    return <AddMediaPopup {...args} />
};

export const AddMediaPopupSection = Template.bind({});

AddMediaPopupSection.args = {
    modalAlignment: "items-end",
    showModal: true,
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
