import React from 'react'
import PropTypes from 'prop-types'
import ListItemDropDown from '../ListItemDropDown'
import Profile from '../Profile'

const CommentHeader = ({
    profileImg,
    profileName,
    profileId,
    lists
}) => {
    return (
        <div className='flex justify-between items-center'>
            <Profile profileImg={profileImg} profileName={profileName} profileId={profileId} />
            <ListItemDropDown
                lists={lists}
                width="min-w-[120px]"
                position="right-0"
            />
        </div>
    )
}

CommentHeader.propTypes = {
    profileImg: PropTypes.string,
    profileName: PropTypes.string,
    profileId: PropTypes.string,
    lists: PropTypes.array,
}

export default CommentHeader
