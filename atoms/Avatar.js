import Image from "next/image";
import PropTypes from "prop-types";

const badgeType = {
  normal: "hidden",
  badge: "px-2 py-0.5 -top-2 border-2 border-white",
  dot: "w-1.5 h-1.5 rounded-full -indent-40 mt-2.5 mr-5 -top-2",
};

const avatarShape = {
  normal: "rounded-none",
  square: "rounded-lg",
  circle: "rounded-full",
};

const avatarSize = {
  small: "w-6 h6 small",
  medium: "w-8 h-8 medium",
  large: "w-10 h-10 large",
  extraLarge: "w-16 h-16",
};

const Avatar = ({ badge, shape, size, imgSrc, title, onClick, badgeTxt }) => {
  return (
    <div
      badge={badge}
      shape={shape}
      size={size}
      className={`relative ${avatarSize[size]}`}
    >
      <div
        className={`flex justify-center items-center text-center bg-primary-300 overflow-hidden text-white text-xl ${avatarShape[shape]}`}
      >
        {badgeTxt && (
          <div
            className={`absolute bg-error-100 text-white text-xs flex items-center justify-center overflow-hidden rounded-xl ${
              badgeType[badge]
            } ${avatarSize[size] === avatarSize["small"] && "py-0 -right-6"}  ${
              avatarSize[size] === avatarSize["medium"] && "-right-5"
            } ${avatarSize[size] === avatarSize["large"] && "-right-4"} ${
              avatarSize[size] === avatarSize["extraLarge"] && "-right-2"
            } z-10`}
          >
            {badgeTxt}
          </div>
        )}
        {imgSrc ? (
          <Image
            onClick={onClick}
            src={imgSrc}
            width="64"
            height="64"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-xl font-medium text-primary-900">{title}</span>
        )}
      </div>
    </div>
  );
};

Avatar.defaultProps = {
  badge: "normal",
  shape: "circle",
  size: "large",
  imgSrc: "/images/icons/profile-img.svg",
  title: "",
  onClick: () => {},
  badgeTxt: "",
};

Avatar.propTypes = {
  badge: PropTypes.oneOf(["normal", "badge", "dot"]),
  shape: PropTypes.oneOf(["normal", "square", "circle"]),
  size: PropTypes.oneOf(["small", "medium", "large", "extraLarge"]),
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  badgeTxt: PropTypes.string,
};

export default Avatar;
