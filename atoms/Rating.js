import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";

const Rating = ({
  initialRating,
  maxRating,
  iconImages,
  iconWidth,
  iconHeight,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(initialRating);

  const handleRatingClick = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleMouseEnter = (ratingValue) => {
    setHover(ratingValue);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="flex items-center -mx-1">
      {[...Array(maxRating)].map((_, i) => {
        const ratingValue = i + 1;
        const isActive = ratingValue <= (hover || rating);

        return (
          <div
            key={i}
            className="mx-1 cursor-pointer"
            onClick={() => handleRatingClick(ratingValue)}
            onMouseEnter={() => handleMouseEnter(ratingValue)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={isActive ? iconImages?.active : iconImages?.inActive}
              alt={`Rating ${ratingValue}`}
              width={iconWidth}
              height={iconHeight}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Rating;

Rating.defaultProps = {
  initialRating: 0,
  maxRating: 5,
  iconImages: {
    active: "",
    inActive: "",
  },
  iconWidth: 24,
  iconHeight: 24,
};

Rating.propTypes = {
  initialRating: PropTypes.number,
  maxRating: PropTypes.number,
  iconImages: PropTypes.shape({
    active: PropTypes.string,
    inActive: PropTypes.string,
  }),
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
};
