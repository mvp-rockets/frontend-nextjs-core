import React, { useState } from 'react'
import Button from '../atoms/Button'
import Heading from '../atoms/Heading'
import IcomoonIcon from '../atoms/IcomoonIcon'
import Image from 'next/image'
import Text from '../atoms/Text'

const currencyFormatter = (num) => {
    return Math.abs(num) > 999
        ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k'
        : Math.sign(num) * Math.abs(num)
}

const LearningCard = ({ className = '', href, as, categoryId, image, title, duration, courseCount, viewCount, likeCount, flag, onDownloadHandle, isVideoCard, dataAutomation, onLikeHandle, onClick, status }) => {
/*     const auth = getAuth();
 */    const [likes, setLikes] = useState(likeCount)

    const onLike = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        const data = await onLikeHandle({
            userId: auth?.user.id, categoryId, title, total_count: courseCount, totalLikes: likeCount, total_views: viewCount, status
        });
        if (data) {
            setLikes(data?.isLiked ? likes + 1 : likes - 1);
        }
    }

    return (
        <a 
            href={href} 
            className={`${className} hover:bg-primary-50 hover:shadow-lg transition-all rounded-3xl shadow-xlg bg-white relative overflow-hidden group`} 
            dataAutomation={dataAutomation + '_card'} 
            onClick={onClick}>

            <div className={`flex rounded-2xl relative overflow-hidden`}>
                <Image src={image} width={1920} height={1080} alt=""/>

                {isVideoCard && <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 scale-100 transition-all'>
                    <IcomoonIcon type='play' className={'stroke-gray-300 fill-basic-white'} size={25} />
                </div>}

                {onDownloadHandle && <Button type='primary' className="absolute left-2 bottom-3 px-2"
                   iconType="download" size="extraSmall"
                    onClick={onDownloadHandle} dataAutomation={dataAutomation + '_download_certificate'}>
                    Download certificate
                </Button>}
            </div>

            <Heading className='mt-3 mb-1 text-base font-semibold' type='h5'> {title} </Heading>

            <div className='flex items-center space-x-2'>
                <Image 
                    alt=""
                    src={'/images/icons/clock.svg'} 
                    height={18} 
                    width={18}/>

                <Text variant="bodySmall"> Duration: {duration} </Text>
            </div>

            {!isVideoCard && <div className='pt-1.5 flex justify-between w-full pr-5'>

            <div className='flex items-center space-x-2'>
                <Image
                    alt=""
                    src={'/images/icons/homework.svg'} 
                    height={18} 
                    width={18}/>

                <Text variant="bodySmall"> {courseCount} course{Number(courseCount) === 1 ? '' : 's'} </Text>
            </div>
          
            <div className='flex items-center space-x-2'>
                <Image
                    alt=""
                    src={'/images/icons/eye.svg'} 
                    height={18} 
                    width={18}/>

                <Text variant="bodySmall"> {currencyFormatter(viewCount)} </Text>
            </div>

            <div className={`flex items-center space-x-2 ${likeCount == likes ? '' : 'is-active'}`}
                onClick={onLike}
                dataAutomation={dataAutomation + '_like_button'}>

                <Image
                    alt=""
                    src={'/images/icons/like.svg'} 
                    height={18} 
                    width={18}/>

                <Text variant="bodySmall"> {currencyFormatter(likes)} </Text>
            </div>

            </div>}
        </a>
    )
}

export default LearningCard