import React from 'react'
import PropTypes from 'prop-types'
import ListItemDropDown from '../ListItemDropDown'
import Profile from '../Profile'

const PostHeader = ({
    profileImg,
    profileName,
    profileId,
    lists,
    time,
    followed,
    isButton = true,
    listDropDown = true
}) => {
    return (
        <div className='flex justify-between items-center'>
            <Profile
                className="items-start"
                profileImg={profileImg}
                profileName={profileName}
                profileId={profileId}
                time={time}
                isButton={isButton}
                isButtonTypeFloat={false}
                followed={followed}
            />
            {listDropDown &&
                <ListItemDropDown
                    lists={lists}
                    width="min-w-[120px]"
                    position="right-0"
                />
            }
        </div>
    )
}

PostHeader.propTypes = {
    profileImg: PropTypes.string,
    profileName: PropTypes.string,
    profileId: PropTypes.string,
    lists: PropTypes.array,
}

export default PostHeader
