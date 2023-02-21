import React from "react";
import DeletePostPopup from "../../../molecules/post/DeletePostPopup";

export default {
    title: "molecules/Post/DeletePostPopupSection",
    component: DeletePostPopup,
};

const Template = (args) => {
    return <DeletePostPopup {...args} />
};

export const DeletePostPopupSection = Template.bind({});
DeletePostPopupSection.args = {

}
