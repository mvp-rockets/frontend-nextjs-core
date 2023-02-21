import React from "react";
import DeleteCommentPopup from "../../../molecules/comment/DeleteCommentPopup";

export default {
    title: "molecules/comment/DeleteCommentPopupSection",
    component: DeleteCommentPopup,
};

const Template = (args) => {
    return <DeleteCommentPopup {...args} />
};

export const DeleteCommentPopupSection = Template.bind({});
DeleteCommentPopupSection.args = {

}
