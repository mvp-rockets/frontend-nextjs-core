import React, { useEffect, useState } from "react";

import VideoPlayer from "../../molecules/VideoPlayer";

export default {
    title: "molecules/VideoPlayer",
    component: VideoPlayer,
};

const Template = (args) => <VideoPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: '/images/SampleVideo.mp4',
    playing: false,
    loop: false,
}

const TemplateWithRef = (args) => {

    const playerRef = React.useRef();
    const [seeking, setSeeking] = useState(null)
    const [isReady, setIsReady] = useState(false)

    const seek = (p) => {
        setSeeking(true)
        if (playerRef.current !== null) {
            console.log('seeking to', p)
            playerRef.current.seekTo(p)
        }
        setTimeout(() => setSeeking(false), 800)
    }

    const onReady = (dddd) => {
        console.log('onReady :>> ', dddd);
        setIsReady(true);
    };

    const onProgress = ({ played, playedSeconds, loaded, loadedSeconds }) => {
        console.log('onProgress :>> ', { played, playedSeconds, loaded, loadedSeconds });
    }

    useEffect(() => {
        seek(5)
    }, [isReady])

    // useEffect(() => {
    //     if (progressWrapper.current !== null) {
    //         setW(progressWrapper.current.clientWidth * props.progress)
    //     }
    // }, [props.progress])

    return <>
        <button onClick={() => seek(2)}>seek</button>
        <VideoPlayer playerRef={playerRef} onProgress={onProgress} onReady={onReady} {...args} />
    </>
};

export const OnSeek = TemplateWithRef.bind({});
OnSeek.args = {
    src: '/images/SampleVideo.mp4',
    playing: false,
    loop: true,
    showBackButton: true,
}