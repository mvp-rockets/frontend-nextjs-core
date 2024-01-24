import PropTypes from "prop-types";
import React from "react";
import Avatar from "./Avatar";
const AvatarGroup = ({
  avatarLists,
  shape,
  size,
  imgWidth = 64,
  imgHeight = 64,
  maxDisplaySize = 3,
}) => {

  return (
    <div className="flex">
      {avatarLists.slice(0, maxDisplaySize).map((avatarList, index) => (
        <div className="-mr-2">
          <Avatar
            shape={shape}
            size={size}
            imgSrc={avatarList.imgSrc}
            imgWidth={imgWidth}
            imgHeight={imgHeight}
            imgAlt={avatarList.imgAlt}
            title={avatarList.title}
            iconAvatar={avatarList.iconAvatar}
            bgColor={avatarList.bgColor}
            titleColor={avatarList.titleColor}
          ></Avatar>
        </div>
      ))}
      {avatarLists.length > maxDisplaySize && <Avatar shape={shape}
        size={size} title={`+${avatarLists.length - maxDisplaySize}`} bgColor="bg-primary-300" titleColor="text-primary-900" />}
    </div>
  )
};

export default AvatarGroup;

AvatarGroup.propTypes = {
  avatarLists: PropTypes.array,
  shape: PropTypes.string,
  size: PropTypes.string,
  maxDisplaySize: PropTypes.number
};
