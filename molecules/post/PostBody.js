import React from 'react'
import PropTypes from 'prop-types'

const PostBody = ({ content }) => {
    return (
        <div className='flex flex-col gap-2' dangerouslySetInnerHTML={{ __html: content }}></div>
    )
}

PostBody.propTypes = {
    content: PropTypes.node
}

export default PostBody
