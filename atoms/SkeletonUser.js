import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const SkeletonUser = ({ length }) => {
    return Array.from({ length }).map((_, index) => (
        <div key={index} className='flex gap-3.75 mb-3.5 items-center' >
            <div className='skeleton'>
                <Skeleton circle={true} width={24} height={24} />
            </div>

            <Skeleton width={130} height={15} />
        </div>
    ))
}

export default SkeletonUser
