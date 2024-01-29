import React from 'react'
import Skeleton from 'react-loading-skeleton'

import Card from '../Card'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCommunity = ({ length }) => {
    return Array.from({ length }).map((_, index) => (
        <Card key={index} className={`card--square flex items-start gap-3 shadow-sm mb-2`}>

            <Skeleton width={60} height={60} className='flex-shrink-0' />

            <div className='flex-grow flex flex-col'>
                <div className='flex gap-3'>
                    <div className='flex-grow'>
                        <Skeleton width={78} height={20} className='flex-shrink-0' />
                        <Skeleton width={66} height={12} className='flex-shrink-0' />
                    </div>
                    <div className='flex-shrink-0'>
                        <Skeleton width={90} height={28} className='rounded-2xl' style={{ borderRadius: 50 }} />
                    </div>
                </div>
                <Skeleton width={184} height={12} className='flex-shrink-0' />
            </div>



        </Card >
    ))
}

export default SkeletonCommunity
