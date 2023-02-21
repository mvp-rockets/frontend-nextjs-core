import React from 'react'
import PropTypes from 'prop-types'
import PostFooter from './PostFooter'
import PostBody from './PostBody'
import PostHeader from './PostHeader'

const Post = ({
    postFooterItem,
    profileImg,
    profileName,
    profileId,
    lists,
    time,
    followed,
    content,
    isButton,
    postBodyClass = "pl-[52px] mt-2",
    listDropDown
}) => {
    return (
        <div className=''>
            <PostHeader
                profileImg={profileImg}
                profileName={profileName}
                profileId={profileId}
                lists={lists}
                time={time}
                followed={followed}
                isButton={isButton}
                listDropDown={listDropDown}
            />
            <div className={postBodyClass}>
                <PostBody
                    content={content}
                />
                <div className='mt-4'>
                    <PostFooter
                        postFooterItem={postFooterItem}
                    />
                </div>
            </div>
        </div>
    )
}

Post.propTypes = {
    profileImg: PropTypes.string,
    profileName: PropTypes.string,
    profileId: PropTypes.string,
    lists: PropTypes.array,
    content: PropTypes.node,
    time: PropTypes.string,
    followed: PropTypes.string,
    postBodyClass: PropTypes.string
}

export default Post
