import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Button from '../../atoms/Button'
import TextArea from '../../atoms/TextArea'
import UploadImagePreview from '../UploadImagePreview'
import AddMediaPopup from './AddMediaPopup'

const PostSubmitBox = ({
    btnClick = () => { },
    isUploaded = false,
    lists,
    showModal,
}) => {

    const [mediaPopup, setMediaPopup] = useState(false);
    return (
        <>
            <div className='bg-white border-t border-gray-200 px-6 pt-5 pb-6'>
                {isUploaded &&
                    <UploadImagePreview
                        imgSrc="/images/demo-img.jpg"
                        imgWidth="80"
                        imgHeight="80"
                        imgAlt="demo"
                    />
                }
                <div className='flex items-end gap-x-2'>
                    <div onClick={() => setMediaPopup(true)} className="flex-shrink-0 mb-2 cursor-pointer">
                        <Image src="/images/icons/add.svg" width="24" height="24" alt="add" />
                    </div>
                    <div className="w-full flex items-center">
                        <TextArea
                            variant='small'
                            fontSize='text-sm'
                            borderRadius="rounded-lg"
                            placeholder="Type here something"
                        />
                    </div>
                    <Button style="primary" btnRadius="rounded-full" label="Save" size="small" onClick={btnClick} />
                </div>
            </div>
            <AddMediaPopup
                lists={lists}
                cardWidth="w-full"
                modalAlignment="items-end"
                showModal={mediaPopup}
                closeModalPopup={() => setMediaPopup(false)}
            />
        </>
    )
}

PostSubmitBox.propTypes = {
    content: PropTypes.node
}

export default PostSubmitBox
