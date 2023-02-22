import React from 'react'
import PropTypes from 'prop-types'
import CommentFooter from './CommentFooter'
import CommentBody from './CommentBody'
import CommentHeader from './CommentHeader'

const Comment = ({
    profileImg,
    profileName,
    profileId,
    lists,
    content,
    time,
    likeNum
}) => {
    return (
        <div className=''>
            <CommentHeader
                profileImg={profileImg}
                profileName={profileName}
                profileId={profileId}
                lists={lists}
            />
            <div className='pl-[52px] mt-2'>
                <CommentBody
                    content={content}
                />
                <div className='mt-1.5'>
                    <CommentFooter
                        time={time}
                        likeNum={likeNum}
                    />
                </div>
            </div>
        </div>
    )
}

Comment.propTypes = {
    profileImg: PropTypes.string,
    profileName: PropTypes.string,
    profileId: PropTypes.string,
    lists: PropTypes.array,
    content: PropTypes.node,
    time: PropTypes.string,
    likeNum: PropTypes.string
}

export default Comment
