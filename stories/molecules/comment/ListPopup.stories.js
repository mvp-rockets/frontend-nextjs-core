import React from "react";
import ListPopup from "../../../molecules/comment/ListPopup";

export default {
    title: "molecules/Comment/ListPopupSection",
    component: ListPopup,
};

const Template = (args) => {
    return <ListPopup {...args} />
};

export const ListPopupSection = Template.bind({});
ListPopupSection.args = {
    profileImg: '/images/profile.jpg',
    profileName: "James Saris",
    profileId: "@Hugo_197",

    lists: [
        {
            item: "#Trade",
            link: "",
            onClick: (e) => { }
        },
        {
            item: "#Trading",
            link: "",
            onClick: (e) => { }
        },
        {
            item: "#Tradingsetup",
            link: "",
            onClick: (e) => { }
        },
        {
            item: "#Tradingmemes",
            link: "",
            onClick: (e) => { }
        },
        {
            item: "##Tradingtrips",
            link: "",
            onClick: (e) => { }
        },
        {
            item: "#Tradingforex",
            link: "",
            onClick: (e) => { }
        },

    ]
}
