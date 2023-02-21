import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../atoms/Avatar';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const Profile = ({
  className,
  profileImg,
  profileName,
  profileId,
  followed,
  time = false,
  isButton = false,
  isButtonTypeFloat = true
}) => {
  return (
    <div className={`flex ${className}`}>
      <div className='flex-shrink-0'>
        <Avatar
          imgSrc={profileImg}
        />
      </div>
      <div className='relative ml-2 w-full'>
        <div className='flex'>
          <Text
            variant='bodySmall'
            children={profileName}
            textColor='text-neutral-600'
            fontWeight='font-semibold'
          />
          {isButton &&
            <Button
              style="link"
              size=""
              btnClass={`p-0 text-sm ml-3 ${isButtonTypeFloat && "absolute right-0 top-2/4 -translate-y-2/4"}`}
              fontWeight={`${followed ? "font-normal" : "font-semibold"}`}
              fontColor={`${followed ? "text-neutral-400" : "text-primary-900"}`}
              label={`${followed ? "Following" : "Follow"}`}
            />}
        </div>
        <div className='flex items-center'>
          <Text
            variant='caption'
            children={profileId}
            textColor='text-neutral-400'
          />
          {time && <Text
            variant='caption'
            children={time}
            textColor='text-neutral-400'
            className="pl-2"
          />}

        </div>
      </div>

    </div>
  );
};

export default Profile;

Profile.propTypes = {
  alignment: PropTypes.string,
  profileImg: PropTypes.string,
  ProfileName: PropTypes.string,
  ProfileId: PropTypes.string,
  followed: PropTypes.bool,
  isButtonTypeFloat: PropTypes.bool
};
