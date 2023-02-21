import React from "react";
import ContinueWatching from '../../organisms/ContinueWatching'

export default {
    title: "organisms/ContinueWatching",
    component: ContinueWatching,
    parameters: {
        layout: 'fullscreen',
    }
};

const list = {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nulla ab, maxime alias suscipit fugit accusamus facilis voluptate nesciunt soluta quo quas sint',
    href: '/',
    image: '/images/webinar-default.svg',
    previousWatchedInPercentage: 20
}

const Template = (args) => <ContinueWatching {...args} />;

export const Default = Template.bind({});
Default.args = {
    className: 'pt-8 pb-12',
    heading: 'Continue Watching:',
    watchList: [
        { id: 1, ...list },
        { id: 2, ...list, previousWatchedInPercentage: 2 },
        { id: 3, ...list, previousWatchedInPercentage: 50 },
        { id: 4, ...list, previousWatchedInPercentage: 90 },
        { id: 5, ...list },
        { id: 6, ...list },
        { id: 7, ...list },
        { id: 8, ...list },
        { id: 9, ...list },
        { id: 10, ...list },
    ]
}