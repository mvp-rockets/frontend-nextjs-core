import Heading from '../atoms/Heading'
import SkeletonLoader from '../atoms/SkeletonLoader'
import React from 'react'
import VideoPlayer from './VideoPlayer'
import Text from '../atoms/Text'

const VideoTimeline = ({ className = '', playerRef, startTime, poster, isLoading, introVideo, heading, subHeading, description, rounded = '', autoplay, muted, videoCallbacks }) => {
    return <>
        <VideoPlayer playerRef={playerRef} className={`${className}`} startTime={startTime} poster={poster} src={introVideo} showBackButton={true} rounded={rounded}
            autoplay={autoplay} muted={muted} videoCallbacks={videoCallbacks} />

        {isLoading
            ? <SkeletonLoader className={`${rounded ? 'md:px-5 rounded-none md:rounded-lg' : ''}`} type='videoTimeline' length={1} />
            : <div className='px-5 pb-8'>
                <Heading type='h4' className='pt-6 mb-4 font-semibold'> {heading} </Heading>
                <Text variant='caption' className='mb-2'> {subHeading} </Text>
                <div className=" font-normal text-gray-600 select-none cursor-text" dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
        }
    </>
}

export default VideoTimeline