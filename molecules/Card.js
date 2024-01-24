import Image from "next/image";
import PropTypes from "prop-types";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

const Card = ({
  backgroundColor,
  borderRadius,
  cardPadding,
  headingText,
  secondaryText,
  imgSrc,
  imgWidth,
  imgHeight,
  imgClass,
  imgAlt,
  buttonLabel,
  iconSrc,
  iconWidth,
  iconHeight,
  iconAlt,
  onClick,
}) => {
  return (
    <a
      className={`${backgroundColor} ${borderRadius} ${cardPadding}  w-fit min-w-[360px] shadow-card flex flex-col overflow-hidden`}
      onClick={onClick}
    >
      {imgSrc && (
        <div className="pb-6">
          <Image
            className={`w-full h-auto ${imgClass}`}
            src={imgSrc}
            width={imgWidth}
            height={imgHeight}
            alt={imgAlt}
          />
        </div>
      )}

      <div className={`${iconSrc && "flex items-center space-x-4"}`}>
        {iconSrc && (
          <Image
            src={iconSrc}
            width={iconWidth}
            height={iconHeight}
            alt={iconAlt}
          />
        )}
        <div className="">
          {headingText && (
            <Heading type="h6" className={`text-sm leading-6 font-bold`}>
              {headingText}
            </Heading>
          )}
          {secondaryText && (
            <Text
              variant="bodySmall"
              className={`text-neutral-400 font-normal pt-1`}
            >
              {secondaryText}
            </Text>
          )}
          {buttonLabel && (
            <Button label={buttonLabel} size="small" className="mt-6" />
          )}
        </div>
      </div>
    </a>
  );
};

Card.defaultProps = {
  className: "",
  backgroundColor: "bg-white",
  borderRadius: "rounded-md",
  cardPadding: "p-4",
  headingText: "",
  secondaryText: "",
  imgSrc: "",
  imgWidth: 288,
  imgHeight: 160,
  imgClass: "cursor-pointer",
  imgAlt: "Image Description",
  buttonLabel: "",
  iconSrc: "",
  iconWidth: 44,
  iconHeight: 44,
  iconAlt: "",
  onClick: () => {},
};

Card.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  cardPadding: PropTypes.string,
  headingText: PropTypes.string,
  secondaryText: PropTypes.string,
  imgSrc: PropTypes.string,
  imgClass: PropTypes.string,
  imgAlt: PropTypes.string,
  buttonLabel: PropTypes.string,
  iconSrc: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  iconAlt: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
