import React, { useState } from 'react';
import IcomoonIcon from './IcomoonIcon';
const Rating = ({ initialRating, maxRating = 5, icon = "star", iconWidth = 24 }) => {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(initialRating);
    return (
        <div className='flex items-center -mx-1'>
            {[...Array(maxRating)].map((rate, i) => {
                const ratingValue = i + 1;
                return (
                    <div className='mx-1 cursor-pointer' value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(rating)}>
                        <IcomoonIcon
                            icon={icon}
                            color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                            size={iconWidth}
                        />
                    </div>
                );
            })}
        </div>
    );
};
export default Rating;