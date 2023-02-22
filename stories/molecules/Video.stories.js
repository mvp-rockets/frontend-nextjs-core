import React from "react";

import Video from "./../../molecules/Video";

export default {
    title: "molecules/Video",
    component: Video,
};

const Template = (args) => <Video {...args} />;

export const Default = Template.bind({});
Default.args = {
    isBlob: false,
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
}

export const Height = Template.bind({});
Height.args = {
    isBlob: false,
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    isObjectFitCover: true,
}