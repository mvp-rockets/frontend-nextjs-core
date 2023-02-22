import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../organisms/Modal'

const DeleteCommentPopup = () => {
    return (
        <Modal
            id="DeleteCommentPopup"
            cardPadding="pt-9 px-6 pb-5"
            cardRadius="rounded-t-lg"
            showModal={true}
            closeIcon={true}
            children="Delete the comment?"
            cardWidth="max-w-[410px]"
            modalSecondaryBtn={true}
            btnAlignment="justify-center"
            modalBodyClass="text-center font-semibold mb-2"
            btnRadius="rounded-full"
            btnSize="medium"
        />
    )
}

DeleteCommentPopup.propTypes = {
    content: PropTypes.node
}

export default DeleteCommentPopup
