import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../organisms/Modal'
import Text from '../../atoms/Text'
import ListItem from '../../atoms/ListItem'

const AddMediaPopup = ({ cardWidth = "max-w-[410px]", showModal, closeModalPopup, modalAlignment, lists }) => {
    return (
        <Modal
            id="AddMediaPopup"
            cardPadding="pt-3 pb-5"
            cardRadius="rounded-t-lg"
            showModal={showModal}
            modalHeader={false}
            modalAlignment={modalAlignment}
            cardWidth={cardWidth}
            modalSecondaryBtn={true}
            btnRadius="rounded-full"
            btnSize="medium"
            modalFooter={false}
            closeModalPopup={closeModalPopup}
        >
            <Text variant='body' className='pl-6 mb-2' fontWeight='font-medium'>Add Media</Text>
            <ListItem
                Type="ul"
                lists={lists}
                positionType="relative"
                width='w-full'
                itemFontSize='text-sm'
                border=''
            />
        </Modal>
    )
}

AddMediaPopup.propTypes = {
    content: PropTypes.node
}

export default AddMediaPopup
