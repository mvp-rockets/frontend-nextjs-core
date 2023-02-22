import React from "react";
import Notification from "../../organisms/Notification";

export default {
    title: "organisms/Notifications",
    component: Notification,
};

const Template = (args) => <Notification {...args} />;

export const Notifications = Template.bind({});

Notifications.args = {
    notificationData: [
        {
            userName: "Rex Taylor",
            notificationLabel: "has started following you.",
            notificationTime: "46min ago",
            userSrc: "/images/icons/notification-profile.svg",
            type: "follower",
        },
        {
            userName: "Rex Taylor",
            notificationLabel: "has started following you.",
            notificationTime: "46min ago",
            userSrc: "/images/icons/notification-profile.svg",
            type: "error",
        },
        {
            userName: "Roland lenard ",
            notificationLabel: "and 8 others have liked your post.",
            notificationTime: "46min ago",
            userSrc: "/images/icons/notification-profile.svg",
            type: "error",
        },
        {
            userName: "Rex Taylor",
            notificationLabel: "has started following you.",
            notificationTime: "46min ago",
            userSrc: "/images/icons/notification-profile.svg",
            type: "error",
        },
        {
            userName: "Rex Taylor",
            notificationLabel: "has started following you.",
            notificationTime: "46min ago",
            userSrc: "/images/icons/notification-profile.svg",
            type: "error",
        },
        {
            userName: "Rex Taylor",
            notificationLabel: "has started following you.",
            notificationTime: "46min ago",
            userSrc: "/images/icons/notification-profile.svg",
            type: "error",
        },
        {
            userName: "Rex Taylor",
            notificationLabel: "has started following you.",
            notificationTime: "46min ago",
            userSrc: "/images/icons/notification-profile.svg",
            type: "error",
        },
        {
            userName: "Rex Taylor",
            notificationLabel: "has started following you.",
            notificationTime: "46min ago",
            userSrc: "/images/icons/notification-profile.svg",
            type: "error",
        },
        {
            userName: "Rex Taylor",
            notificationLabel: "has started following you.",
            notificationTime: "46min ago",
            userSrc: "/images/icons/notification-profile.svg",
            type: "error",
        },
        {
            userName: "Rex Taylor",
            notificationLabel: "has started following you.",
            notificationTime: "46min ago",
            userSrc: "/images/icons/notification-profile.svg",
            type: "error",
        },
    ],
};
