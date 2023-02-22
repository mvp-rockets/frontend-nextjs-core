import PropTypes from "prop-types";
import React, { useState } from "react";
// import ReactPlayer from "react-player";
import IcomoonIcon from "../atoms/IcomoonIcon";

export default function Video({ src, isFullscreen, removeMedia, className, isObjectFitCover, handlerFullscreen, isBlob = true }) {
    const [playing, setPlaying] = useState(false);
    const [hovered, setHovered] = useState(true);
    const [played, setPlayed] = useState(0);

    const formatTime = () => {
        const getSeconds = `0${played % 60}`.slice(-2);
        const minutes = `${Math.floor(played / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);

        return `${getMinutes}:${getSeconds}`;
    };

    return (
        <div
            className={`${className} ${isObjectFitCover ? "video--cover" : ""} w-full h-full rounded-lg overflow-hidden relative shadow-md`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {isBlob && (
                <button className="absolute top-2 right-2 cursor-pointer z-2">
                    <IcomoonIcon
                        type="close"
                        className={`w-6 fill-none stroke-basic-white hover:stroke-primary1-500 iconShadow`}
                        {...(removeMedia && { onClick: removeMedia })}
                        dataAutomation="remove-video"
                    />
                </button>
            )}

            {!isBlob && !isFullscreen && (
                <button className="group absolute bottom-0 right-0 p-3 cursor-pointer z-2">
                    <IcomoonIcon
                        type="angleExpand"
                        className={`w-6 fill-none stroke-basic-white group-hover:stroke-primary1-500`}
                        onClick={handlerFullscreen}
                        dataAutomation="fullscreen-video"
                    />
                </button>
            )}

            <div
                className={`${
                    playing && !hovered ? " hidden" : " absolute"
                } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[8] cursor-pointer text-white shadow-xl`}
                onClick={() => setPlaying(!playing)}
            >
                {playing ? (
                    <SvgIcon
                        type="pause"
                        className={`w-10 fill-basic-white`}
                        dataAutomation="pause-button"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setPlaying(false);
                        }}
                    />
                ) : (
                    <SvgIcon
                        type="play"
                        className={`w-10 fill-basic-white`}
                        dataAutomation="play-button"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setPlaying(true);
                        }}
                    />
                )}
            </div>
            {<div className="text-xs font-semibold text-basic-white absolute bottom-3 left-5">{formatTime()}</div>}
            {/* <div className='object-fit h-full w-full flex justify-center items-center'> */}
            {/* <ReactPlayer
                    loop
                    onProgress={(progress) => {
                        setPlayed(Math.floor(progress.playedSeconds));
                    }}
                    url={src}
                    playing={playing}
                    width={"100%"}
                    height={"100%"}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundBlendMode: "multiply",
                    objectFit: "contain",
                }}
                /> */}
            {/* </div>] */}
        </div>
    );
}

Video.defaultProps = {
    className: "",
    isObjectFitCover: true,
    isFullscreen: false,
};

Video.propTypes = {
    className: PropTypes.string,
    isObjectFitCover: PropTypes.bool,
    isFullscreen: PropTypes.bool,
};
