import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
import Heading from '../../atoms/Heading'
import Button from '../../atoms/Button'
import Avatar from '../../atoms/Avatar'
import TextArea from '../../atoms/TextArea'
import Text from '../../atoms/Text'

const RePost = ({
    postFooterItem,
    profileImg,
    profileName,
    profileId,
    lists,
    time,
    content,
    postBodyClass = "pl-0 mt-3.5",
    inputLength,
    inputMaxLength
}) => {
    return (
        <>
            <div className='bg-white w-full flex justify-between px-6 py-4 fixed top-0 left-0 z-10 overflow-hidden'>
                <Heading type='h6' className="font-semibold" children="Repost" />
                <Button label='Cancel' style='' size='' fontSize="text-sm" fontColor="text-neutral-400" fontWeight="font-normal" />
            </div>

            <div className='bg-gray-100 px-5 h-screen pt-[80px] pb-[92px] overflow-y-auto'>
                <div className='flex'>
                    <div className='flex-shrink-0 mr-2'>
                        <Avatar imgSrc={profileImg} />
                    </div>

                    <div className='w-full mb-2'>
                        <TextArea
                            fontSize="text-sm"
                            placeholder="Share your views..."
                            bg="bg-transparent"
                            border='border-0'
                        />
                        <div className='text-right'>
                            {inputLength && (
                                <Text variant='caption' textColor='text-neutral-400'>
                                    {inputLength}/{inputMaxLength}
                                </Text>
                            )}
                        </div>

                    </div>
                </div>
                <div className='border border-gray-200 rounded-lg px-1.5 py-3 ml-16'>
                    <Post
                        profileImg={profileImg}
                        profileName={profileName}
                        profileId={profileId}
                        lists={lists}
                        time={time}
                        isButton={false}
                        content={content}
                        postFooterItem={postFooterItem}
                        postBodyClass={postBodyClass}
                        listDropDown={false}
                    />
                </div>
            </div>

            <div className='bg-white w-full flex justify-end px-6 py-3.5 fixed bottom-0 right-0 z-10'>
                <Button size='small' label='Post' btnRadius="rounded-full" />
            </div>
        </>
    )
}

RePost.propTypes = {
    profileImg: PropTypes.string,
    profileName: PropTypes.string,
    profileId: PropTypes.string,
    lists: PropTypes.array,
    content: PropTypes.node,
    time: PropTypes.string,
    followed: PropTypes.string,
    postFooterItem: PropTypes.array,
    postBodyClass: PropTypes.string,
    inputLength: PropTypes.number,
    inputMaxLength: PropTypes.number,
}

export default RePost
