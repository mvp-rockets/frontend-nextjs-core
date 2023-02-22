import React from 'react'
import ProgressBar from '../atoms/ProgressBar'
import Image from 'next/image'
import Text from '../atoms/Text'

const ContinueWatchingCard = ({ 
        className = '',
        title,
        href,
        image,
        previousWatchedInPercentage,
        dataAutomation,
        onClick
     }) => {

    return (
        <a href={href} className={`${className} group`} dataAutomation={dataAutomation} onClick={onClick}>
            <div className={`flex overflow-hidden rounded-xl relative transition-all group-hover:scale-95 duration-150`}>
                <Image src={image} width={1920} height={1080} />

                <div className='absolute left-0 bottom-0 w-full p-3 z-10'>
                    <ProgressBar currentProgress={previousWatchedInPercentage} />
                </div>
            </div>

            <Text varinat ={'bodySmall'} className='mt-2 mb-0 truncate'>
                {title}
            </Text>
        </a>
    )
}

export default ContinueWatchingCard;