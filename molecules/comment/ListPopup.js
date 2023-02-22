import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../organisms/Modal'
import ListItem from '../../atoms/ListItem'

const AddMedia = ({ lists }) => {
    return (
        <Modal
            id="AddMedia"
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
            overLayOpacity="bg-opacity-50"
        >
            <ListItem
                Type="ul"
                lists={lists}
                positionType="relative"
                width='w-full'
                itemFontSize='text-sm'
                itemPadding='px-6 py-4'
                border=''
            />
        </Modal>
    )
}

AddMedia.propTypes = {
    content: PropTypes.node
}

export default AddMedia
