import React from "react";
import ContinueWatchingCard from "../../molecules/ContinueWatchingCard";

export default {
    title: "molecules/ContinueWatchingCard",
    component: ContinueWatchingCard,
};

const Template = (args) => {
    return <ContinueWatchingCard {...args} />;
};

export const OrderConfirmed = Template.bind({});
OrderConfirmed.args = {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nulla ab, maxime alias suscipit fugit accusamus facilis voluptate nesciunt soluta quo quas sint",
    href: "/",
    image: "/images/webinar-default.svg",
    previousWatchedInPercentage: 20,
};
