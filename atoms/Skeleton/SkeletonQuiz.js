import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const QuizSkeleton = ({ length }) => {
    return Array.from({ length }).map((_, index) => (
        <div key={index} className='bg-basic-white p-5 mb-2 sm:shadow-sm'>
            <div className='flex gap-4 mb-3'>
                <Skeleton width={60} height={60} className='flex-shrink-0' />
                <div className='flex-grow'>
                    <Skeleton count={2} className='w-full' height={20} />
                </div>
            </div>

            <div className='flex gap-2 mt-3'>

                <div className='flex flex-row-reverse mr-2'>
                    <Skeleton circle={true} width={16} height={16} />
                </div>
                <div className='flex-grow'>
                    <Skeleton />

                </div>


            </div>

            <div className='flex justify-between mt-6.5 flex-grow items-center'>
                <Skeleton width={60} height={10} className='flex-shrink-0 mt-2' />
                <Skeleton width={60} height={28} className='rounded-2xl' style={{ borderRadius: 50 }} />
            </div>

        </div>
    ))
}

export default QuizSkeleton
