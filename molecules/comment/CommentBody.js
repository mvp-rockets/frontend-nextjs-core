import React from 'react'
import PropTypes from 'prop-types'

const CommentBody = ({ content }) => {
    return (
        <div className='flex flex-col gap-2' dangerouslySetInnerHTML={{ __html: content }}>

        </div>
    )
}

CommentBody.propTypes = {
    content: PropTypes.node
}

export default CommentBody
