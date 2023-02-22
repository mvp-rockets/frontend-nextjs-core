import React from 'react'
import PropTypes from 'prop-types'
import Text from '../../atoms/Text'

const CommentFooter = ({ time, likeNum }) => {
    return (
        <div className='flex gap-4'>
            <Text variant="caption" textColor="text-neutral-400" children={time} />
            <Text variant="caption" textColor="text-neutral-400" children={`like (${likeNum})`} />
            <Text variant="caption" textColor="text-neutral-400" children="Replay" />
        </div>
    )
}

CommentFooter.propTypes = {
    time: PropTypes.string,
    likeNum: PropTypes.string
}

export default CommentFooter
