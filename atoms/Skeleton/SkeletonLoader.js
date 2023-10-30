import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';


const Paragraph = ({ count = 3 }) => <><Skeleton count={count} height={15} /><Skeleton height={15} containerClassName='block w-10/12' /></>;
const Line = ({ className = '', width, height }) => <Skeleton className={className} containerClassName='mt-5' height={height} style={{ width }} />;
const User = ({ className = '', circleSize, lineWidth }) => <div className={`${className} flex gap-2 items-center`}>
    <Skeleton circle={true} width={circleSize} height={circleSize} />
    <div className='w-full'>
        <Skeleton className='mt-3' height={10} style={{ width: lineWidth }} />
    </div>
</div>

const SkeletonTypes = {
    medicineSummary: ({ index }) => <div key={index} className='flex w-full md:w-[214px] cursor-pointer flex-col bg-basic-white p-5 md:px-3.5 md:pb-6 md:pt-3 shadow-sm relative md:rounded-2xl'>
        <div className='flex md:flex-col justify-between gap-3.5 md:gap-3' >
            <div className='md:hidden'><Skeleton width={78} height={78} /></div>
            <div className='hidden md:block'><Skeleton height={140} /></div>

            <div className='flex-grow'>
                <Skeleton width={100} height={15} className='flex-shrink-0' />
                <Skeleton width={50} height={10} className='flex-shrink-0' />
                <Skeleton width={70} height={20} className='rounded-2xl' style={{ borderRadius: 50 }} />
            </div>
            <div className='flex-wrap mt-6.5 md:mt-4 text-right flex-shrink-0 md:flex md:items-center md:gap-1 '>
                <Skeleton containerClassName='flex w-1/2' height={15} />
                <Skeleton containerClassName='flex w-1/3' height={15} />
            </div>
        </div>
        <div className='w-1/ flex justify-end flex-grow md:justify-center mt-4.5 md:mt-4'>
            <Skeleton width={90} height={28} className='rounded-2xl' style={{ borderRadius: 50 }} />
        </div>
    </div>,

    clinicBlogSummary: ({ index }) => <div key={index} type='regularMob' className='p-4 pb-5 flex flex-col md:flex-row gap-6 relative'>
        <Skeleton className='w-full h-full shrink-0' containerClassName='w-full h-full rounded-lg w-full h-40 md:h-62.5 md:w-82.5' />
        <div className='flex-grow'>
            <Skeleton width={200} height={24} className='mb-6 md:mt-3' />
            <Paragraph />
            <div className='mt-3 mb-5'>
                <Skeleton count={3} inline width={60} height={24} className='mr-4' style={{ borderRadius: 50 }} />
            </div>

            <Skeleton width={200} height={15} className='mt-4' />
        </div>
    </div>,

    drTiming: ({ index }) => {
        return <div key={index} >

            <Skeleton inline width={200} height={15} />

            <div className='flex gap-1.5 mb-5'>
                <Skeleton inline width={20} height={12} />
                <Skeleton inline containerClassName='w-7/12' height={12} />
            </div>

            <div className='mt-7 grid gap-x-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
                {Array.from({ length: 7 })?.map((item, index) => (
                    <div className='mb-7.5'>
                        <Skeleton inline containerClassName='w-7/12' height={12} />
                        {Array.from({ length: 2 }).map(time => (
                            <Skeleton inline containerClassName='w-full' height={12} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    },

    similarDoctor: ({ index, minHeight }) => {
        return <div key={index} className={`flex bg-basic-white shadow-md rounded-lg items-start px-5 pt-3 pb-2 gap-3`} style={{ minHeight: minHeight || 70 }}>
            <Skeleton width={40} height={40} borderRadius={4} />
            <div className='w-full mt-1.5'>
                <Skeleton containerClassName='flex w-[50%]' height={10} />
                <Skeleton containerClassName='flex w-[90%]' height={10} />
            </div>
        </div>
    },

    blogSummary: ({ index, isShowServices = false }) => {
        return <div key={index} className={`card--regular mb-2 relative overflow-hidden`}>
            <div className={`flex-col flex p-4 pb-2`}>
                <div className='relative aspect-[342/223] rounded-'>
                    <Skeleton width={'100%'} height={'100%'} className='absolute rounded-2xl' borderRadius={20} />
                </div>
                <div className='mt-5 w-full'>
                    <Skeleton containerClassName='flex w-10/12' height={15} />

                    <Skeleton count={2}  width='100%' height={15} />
                </div>
                <div className='mb-3.5 flex gap-3 items-center'>
                    <Skeleton containerClassName='shrike-0' width={40} height={40} style={{ borderRadius: '100%' }} />
                    <div className="flex-grow self-start mt-2.5">
                        <Skeleton width={200} height={15} />
                        <Skeleton width={180} height={15} />
                    </div>
                </div>
            </div>
        </div>
    },

    youtubeCard: ({ index }) => <div key={index} type='regular' className='p-4 pb-5'>
        <Skeleton className='w-full h-full aspect-video' />
        <Skeleton height={20} className='mt-6 md:mt-4 mb-1' containerClassName='block w-4/6' />
        <Skeleton height={15} containerClassName='block w-1/2' />
    </div>,

    feedCard: ({ index }) => <div key={index} type='regular' className='bg-basic-white flex-shrink-0 feedCard mx-auto rounded-none md:rounded-2xl shadow-sm py-3.5 mb-2 px-5'>
        <div className='mb-3.5 flex gap-3 items-center'>
            <Skeleton containerClassName='shrike-0' width={54} height={54} style={{ borderRadius: '100%' }} />
            <div className="flex-grow self-start mt-2.5">
                <Skeleton width={200} height={15} />
                <Skeleton width={180} height={15} />
            </div>
        </div>
        <Paragraph />
        <div className='flex justify-between mt-5'>
            <Skeleton width={150} height={20} />
            <Skeleton width={50} height={15} />
        </div>
    </div>,

    userShortSummary: ({ index, isCircularImage = true, minHeight, isHideParagraph = false, }) => {
        return <div key={index} className={`flex gap-3 w-full bg-basic-white hover:bg-primary1-50 transition-regular cursor-pointer border-t border-b border-gray-100 px-5 items-center`} style={{ minHeight: minHeight || 70 }}>

            <Skeleton width={30} height={30} containerClassName="mt-1" className='flex-shrink-0 mb-4' style={{ borderRadius: isCircularImage ? 100 : 4 }} />
            <div className='flex-grow mt-1 ml-3'>
                <Skeleton containerClassName='flex w-7/12' height={10} />

                {!isHideParagraph && <div className='flex gap-2 items-center -mt-2'>
                    <Skeleton width={50} height={10} />
                    <Skeleton width={50} height={10} />
                    <Skeleton width={50} height={10} />
                </div>}

            </div>
        </div>
    },

    singleRow: ({ index, isShowAvatar = false, minHeight }) => {
        return <div key={index} className={`flex transition-regular  border-t border-b border-gray-100 px-5 items-center gap-2`} style={{ minHeight: minHeight || 70 }}>
            {isShowAvatar && <Skeleton width={28} height={28} borderRadius={100} />}
            <Skeleton containerClassName='flex w-full mb-0 h-2.5' height={10} />
        </div>
    },

    clinicDoctorSummary: ({ index, isShowServices = false }) => {
        return <div key={index} className={`card--regular mb-2 relative overflow-hidden`}>
            <div>
                <div className={`flex-col flex p-4 pb-2`}>
                    <div className='relative aspect-[342/223] rounded-'>
                        <Skeleton width={'100%'} height={'100%'} className='absolute rounded-2xl' borderRadius={20} />
                    </div>
                    <div className='mt-5 w-full'>
                        <div className='flex items-center mb-4 gap-5'>
                            <Skeleton containerClassName='flex w-10/12' height={15} />
                        </div>
                        <div className='flex gap-2'>
                            <Skeleton inline width={20} height={12} />
                            <Skeleton inline containerClassName='w-7/12' height={12} />
                        </div>
                        <div className='flex gap-2'>
                            <Skeleton inline width={20} height={12} />
                            <Skeleton inline containerClassName='w-7/12' height={12} />
                        </div>
                    </div>
                </div>

                {isShowServices && <div className='flex-col bg-primary2-50 px-3.5 pt-4 flex gap-4'>
                    <div className='flex gap-2'>
                        <Skeleton inline width={20} height={12} />
                        <Skeleton inline containerClassName='w-3/12' height={12} />
                    </div>
                    <div className='grid grid-cols-2 gap-x-5 gap-y-0'>
                        {Array.from({ length: 4 })?.map(() =>
                            <Skeleton containerClassName='flex w-full' height={10} />
                        )}
                    </div>
                </div>}
            </div>
        </div>
    },

    learningCard: ({ index, isVideoCard = false }) => {
        return <div key={index} type='regular' className={`px-3 xxs:px-4 pt-2 xxs:pt-3 pb-4 xxs:pb-5 rounded-3xl shadow-sm bg-basic-white relative`} >
            <Skeleton className='w-full aspect-video' style={{ borderRadius: 24 }} />

            <Line className='mt-3 mb-1' width={'80%'} height={20} />
            <Line className='mt-3 mb-1' width={'40%'} height={15} />
            {!isVideoCard && <>

                <div className='pt-2 flex justify-between w-full max-w-81 gap-1'>
                    <Skeleton width={60} height={15} />
                    <Skeleton width={60} height={15} />
                    <Skeleton width={60} height={15} />
                </div>
            </>}

        </div>
    },

    courseCard: ({ index }) => {
        return <div key={index} type='regular' className={`pt-3 pl-3 pb-4 pr-3 xxs:px-4 xxs:pt-3 xxs:pb-5 rounded-3xl shadow-sm bg-basic-white overflow-hidden relative z-1`} >
            <Line className='mt-3 mb-1' width={'80%'} height={20} />
            <User circleSize={24} lineWidth="30%" />
            <div className='w-8/12 mt-1'>
                <Paragraph count={2} />
            </div>
        </div>
    },

    topicCard: ({ index }) => {
        return <div key={index} type='regular' className={`pt-3 pl-5 pb-2 pr-3 rounded-xl shadow-sm bg-basic-white relative overflow-hidden before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-primary1-300 z-1`} >
            <Line className='mb-1' width={'50%'} height={20} />
            <Line className='mt-1' width={'75%'} height={15} />
        </div>
    },

    videoTimeline: ({ index, className }) => {
        return <React.Fragment key={index}>
            <div className='px-5 mb-6 mt-6'>
                <Line className='mb-2' width={'80%'} height={20} />
                <div className='w-8/12 mt-1'>
                    <Paragraph count={2} />
                </div>
            </div>
        </React.Fragment>
    },

}

const SkeletonLoader = (props) => {
    const { type, length, ...rest } = props;
    return Array.from({ length }).map((_, index) => SkeletonTypes[type]({ index, ...rest }))
};


SkeletonLoader.defaultProps = {
    className: '',
    length: 1,
}

SkeletonLoader.propTypes = {
    className: PropTypes.string,
    length: PropTypes.number,
    type: PropTypes.oneOf(['medicineSummary', 'clinicBlogSummary', 'youtubeCard', 'feedCard', 'userShortSummary', 'singleRow', 'clinicDoctorSummary', 'learningCard', 'courseCard', 'videoTimeline', 'topicCard', 'similarDoctor', 'blogSummary',]),
}
export default SkeletonLoader