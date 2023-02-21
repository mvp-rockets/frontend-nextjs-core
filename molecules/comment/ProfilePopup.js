import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../organisms/Modal'
import Profile from '../Profile'

const ProfilePopup = ({ profileList }) => {
    return (
        <Modal
            id="ProfilePopup"
            cardPadding="p-0"
            cardRadius="rounded-t-lg"
            showModal={true}
            modalHeader={false}
            modalAlignment="items-end"
            cardWidth="max-w-[410px]"
            modalSecondaryBtn={true}
            btnRadius="rounded-full"
            btnSize="medium"
            modalFooter={false}
        >
            {profileList.map((data) => (
                <div className="py-3 pl-6">
                    <Profile
                        profileImg={data.profileImg}
                        profileName={data.profileName}
                        profileId={data.profileId}
                        followed={data.followed}
                    />
                </div>
            ))}


        </Modal>
    )
}

ProfilePopup.propTypes = {
    content: PropTypes.node
}

export default ProfilePopup
