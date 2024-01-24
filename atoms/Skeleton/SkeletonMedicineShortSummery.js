import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonMedicineShortSummary = ({ length }) => {
    return Array.from({ length }).map((_, index) => (
        <div className={`flex gap-3 w-full bg-basic-white hover:bg-primary1-50 transition-regular cursor-pointer border-t border-b border-gray-100 p-5 pb-5 min-h-23.25`}>

            <Skeleton width={30} height={30} className='flex-shrink-0' style={{ borderRadius: 5 }} />

            <div className='flex-gro'>
                <Skeleton containerClassName='' width={250} height={10} />

                <div className='flex gap-2 items-center mt-1'>
                    <Skeleton width={50} height={10} />
                    <Skeleton width={50} height={10} />
                    <Skeleton width={50} height={10} />
                </div>

            </div>
        </div>
    ))
}

export default SkeletonMedicineShortSummary
