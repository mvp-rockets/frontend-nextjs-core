import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../organisms/Modal'

const DeletePostPopup = () => {
    return (
        <Modal
            id="deleteComment"
            cardRadius="rounded-t-lg"
            cardPadding="pt-9 px-6 pb-5"
            showModal={true}
            modalHeader={false}
            children="Delete post?"
            cardWidth="max-w-[410px]"
            modalSecondaryBtn={true}
            btnAlignment="justify-center"
            modalBodyClass="text-center font-semibold mb-2"
            btnRadius="rounded-full"
            btnSize="medium"
        />
    )
}

DeletePostPopup.propTypes = {
    content: PropTypes.node
}

export default DeletePostPopup
