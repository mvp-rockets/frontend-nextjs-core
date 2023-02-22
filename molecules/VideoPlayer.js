import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'
import { Stream } from "@cloudflare/stream-react";
import Skeleton from 'react-loading-skeleton';
import IcomoonIcon from '../atoms/IcomoonIcon';


export default function VideoPlayer({ className = '', src, playerRef, startTime, poster, autoplay, loop, muted, backRoute = '/', showBackButton, rounded, videoCallbacks, onBack }) {
    const router = useRouter();

    const [isPlaying, setIsPlaying] = useState(false);
    const [isInitialRendered, setIsInitialRendered] = useState(false);
    const [isPlayerLoaded, setIsPlayerLoaded] = useState(false)

    const onPause = (e) => {
        setIsPlaying(false);
        videoCallbacks?.onPause && videoCallbacks?.onPause(e);
    }
    const onPlay = (e) => {
        setIsPlaying(true);
        videoCallbacks?.onPlay && videoCallbacks?.onPlay(e);
    }


    useEffect(() => {
        setIsInitialRendered(true)
    }, [])

    const onClickBack = () => {
        if (onBack) {
            onBack();
        } else {
            if (window.history.length === 1) {
                router.push(backRoute);
            } else {
                router.back();
            }
        }
    }
    return (
        <div className={`${className} ${rounded} overflow-hidden relative group`}>

            {(isInitialRendered) && <div>
                <Stream
                    poster={`https://customer-m033z5x00ks6nunl.cloudflarestream.com/${src}/thumbnails/thumbnail.jpg?time=2s&height=270`}
                    streamRef={playerRef}
                    src={src}
                    startTime={startTime}
                    autoplay={autoplay}
                    muted={muted}
                    loop={loop}
                    onLoadStart={() => setIsPlayerLoaded(true)}
                    controls
                    {...videoCallbacks}
                    onPause={onPause}
                    onPlay={onPlay}
                />
            </div>}

            {!isPlayerLoaded && <div className={`${className} ${rounded} overflow-hidden`}>
                <Skeleton className='flex w-full aspect-video' containerClassName='flex' />
            </div>}


            {showBackButton && <div className={`absolute left-3.5 top-4 rounded-full z-1 bg-white hover:bg-primary-100 transition-all cursor-pointer w-8 h-8 justify-center items-center ${isPlaying ? 'none' : 'flex'}`}
                onClick={onClickBack} data-automation='back-button'>
                <IcomoonIcon
                    icon={'angle-left'} 
                    size={15}
                    className={`stroke-gray-500 transition-all mr-1`} />
            </div>}
        </div>
    )
}



VideoPlayer.defaultProps = {
    className: '',
    isObjectFitCover: true,
    isFullscreen: false,
}

VideoPlayer.propTypes = {
    className: PropTypes.string,
    isObjectFitCover: PropTypes.bool,
    isFullscreen: PropTypes.bool,
}