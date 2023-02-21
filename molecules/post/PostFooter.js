import React from 'react'
import PropTypes from 'prop-types'
import IconWithText from '../IconWithText'

const PostFooter = ({ postFooterItem }) => {
    return (
        <div className='flex gap-x-10'>
            {postFooterItem.map((item) => (
                <IconWithText
                    title={item.title}
                    className="gap-1.5 cursor-pointer"
                    isActive={item.isActive}
                    iconSrc={item.iconSrc}
                    activeIconSrc={item.activeIconSrc}
                    iconWidth="24"
                    iconHeight="24"
                    iconAlt="icon"
                    variant="caption"
                    textColor="text-neutral-500" />
            ))}

        </div>
    )
}

PostFooter.propTypes = {
    time: PropTypes.string,
    likeNum: PropTypes.string
}

export default PostFooter
