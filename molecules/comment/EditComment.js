import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../organisms/Modal'
import Button from '../../atoms/Button'
import Text from '../../atoms/Text'
import PostSubmitBox from './PostSubmitBox'
const EditComment = ({ value, closeModalPopup, lists }) => {
    return (
        <Modal
            id="EditComment"
            cardPadding="p-0"
            cardRadius="rounded-t-lg"
            showModal={true}
            modalHeader={false}
            modalAlignment="items-end"
            cardWidth="max-w-[410px]"
            modalSecondaryBtn={true}
            btnRadius="rounded-full"
            btnSize="medium"
            modalFooter={false}
        >
            <div className='flex items-center justify-between pt-4 pb-3 px-6'>
                <Text variant='text-sm' fontWeight='font-semibold' children="Edit Comment" />
                <Button style='link' size='extraSmall' onClick={closeModalPopup} btnClass="p-0 text-neutral-400" label="Cancel" />
            </div>

            <PostSubmitBox
                height="min-h-[53px]"
                value={value}
                onClick={() => { }}
                buttonClick={() => { }}
                isUploaded={true}
                lists={lists}
            />
        </Modal>
    )
}

EditComment.propTypes = {
    content: PropTypes.node
}

export default EditComment
