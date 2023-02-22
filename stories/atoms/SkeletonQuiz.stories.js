import React from "react";

import SkeletonQuiz from "../../atoms/SkeletonQuiz";

export default {
    title: "atoms/SkeletonQuiz",
    component: SkeletonQuiz,
};

const Template = (args) => <SkeletonQuiz {...args} />;

export const Default = Template.bind({});
Default.args = {
    length: 2,
};