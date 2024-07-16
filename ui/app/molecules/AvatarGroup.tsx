import React from 'react';
import Avatar from '../atoms/Avatar';

interface AvatarItem {
  id: string | number;
  imgSrc: string;
  bgColor?: string;
  text?: string;
  imgHeight?: number;
  imgWidth?: number;
}

interface AvatarGroupProps {
  avatarLists: AvatarItem[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatarLists }) => {
  return (
    <div className='flex'>
      {avatarLists.map((item) => (
        <Avatar
          key={item.id}
          avatarShape="circle"
          avatarSize="normal"
          className="-mr-2"
          fill={true}
          imgSrc={item.imgSrc}
          onClick={() => {}}
          bgColor={item.bgColor}
          text={item.text}
          imgHeight={item.imgHeight}
          imgWidth={item.imgWidth}
        />
      ))}
    </div>
  );
};

export default AvatarGroup;
