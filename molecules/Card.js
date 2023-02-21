import React from "react";
import PropTypes from "prop-types";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

const Card = ({
  className = "",
  variant = "default",
  backgroundColor = "bg-white",
  borderRadius = "rounded-md",
  cardPadding ="p-4",
  HeadingClass = "",
  SecondaryTextClass = "",
  HeadingText = "",
  SecondaryText ="",
  imgSrc = "",
  imgClass = "cursor-pointer",
  imgAlt = "Image Description",
  buttonLabel = "",
  iconSrc = "",
  iconAlt = "",
  onClick,
}) => {

  const cardType = {
    default: "default",
    cardWithIcon: "cardWithIcon",
    cardWithImage: "cardWithImage",
    detailCard: "detailCard"
  };

  return (
    <a
      variant={cardType[variant]}
      className={`${backgroundColor} ${borderRadius} ${cardPadding} ${className} w-fit min-w-[360px] shadow-card flex flex-col overflow-hidden`}
      onClick={onClick}>

        {imgSrc && <div className='pb-6'>
          <img className={`w-full h-auto ${imgClass}`}
               src={imgSrc} 
               alt={imgAlt} />
        </div> }

        <div className={`${iconSrc && 'flex items-center space-x-4' }`}>
            {iconSrc &&  <Icon src={iconSrc} alt={iconAlt}/> }
            <div className=''>
                <Heading type={6} className={`text-sm leading-6 font-bold ${HeadingClass}`}> {HeadingText} </Heading>
                <Text variant="bodySmall" className={`text-neutral-400 font-normal pt-1 ${SecondaryTextClass}`}> {SecondaryText} </Text>
                {buttonLabel && <Button label={buttonLabel} size="small" className="mt-6"/> }
            </div>
        </div>
    </a>
  );
};

export default Card;

Card.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  cardPadding: PropTypes.string,
  variant: PropTypes.string,
  HeadingText: PropTypes.string,
  SecondaryText: PropTypes.string,
  HeadingClass: PropTypes.string,
  SecondaryTextClass: PropTypes.string,
  buttonLabel: PropTypes.string,
};
