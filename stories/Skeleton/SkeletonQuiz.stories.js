import React from "react";

import SkeletonQuiz from "../../atoms/Skeleton/SkeletonQuiz";

export default {
    title: "atoms/Skeleton/SkeletonQuiz",
    component: SkeletonQuiz,
};

const Template = (args) => <SkeletonQuiz {...args} />;

export const Default = Template.bind({});
Default.args = {
    length: 2,
};