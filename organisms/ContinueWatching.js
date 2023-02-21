import React from 'react'
import ContinueWatchingCard from '../molecules/ContinueWatchingCard'
import Text from '../atoms/Text'

const ContinueWatching = ({ className = '', heading, watchList, dataAutomation, onClickContinueWatch }) => {
    return (
        <div className={`${className}`}>
                <Text variant='body' className='text-neutral-500' fontWeight='font-semibold' >
                    {heading}
                </Text>

                <div className='flex gap-2 md:gap-3.5 mb-5 mt-3.5 overflow-y-auto no-scrollbar'>
                    {watchList?.map(({ lectureId, title, href, image, previousWatchedInPercentage }) => (
                        <ContinueWatchingCard
                            className='w-[180px] shrink-0'
                            key={lectureId}
                            href={href}
                            image={image}
                            previousWatchedInPercentage={previousWatchedInPercentage}
                            title={title}
                            dataAutomation={dataAutomation}
                            onClick={(e) => {
                                e.preventDefault();
                                onClickContinueWatch({
                                    href: '/learning/[categoryId]/[courseId]/[topicId]/[topicVideoId]',
                                    as: href,
                                    id: lectureId,
                                    title,
                                })
                            }}
                        />
                    ))}
                </div>
        </div>
    )
}

export default ContinueWatching