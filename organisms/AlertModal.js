import Image from "next/image";
import PropTypes from "prop-types";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Modal from "./Modal";

const AlertModal = ({ heading, subHeading, icon, show, footerButtons }) => {
  if (!show) return null;
  return (
    <>
      <Modal isHeader={false} footerButtons={footerButtons}>
        <div className="flex py-4 px-2">
          {icon && (
            <div className="flex-shrink-0 mr-4">
              <Image
                src={icon.src}
                width={icon.width}
                height={icon.height}
                alt={icon.alt}
              />
            </div>
          )}
          <div>
            {heading && (
              <Heading type="h6" className={`font-bold mb-2`}>
                {heading}
              </Heading>
            )}
            {subHeading && (
              <Text className={`text-sm text-gray-500`}>{subHeading}</Text>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AlertModal;

AlertModal.defaultProps = {
  show: true,
  heading: "Alert Heading",
  subHeading: "Alert Subheading",
  icon: PropTypes.shape({
    src: "",
    width: 20,
    height: 20,
    alt: "",
  }),
  footerButtons: [
    {
      label: "No",
      style: "ghost",
      size: "extraSmall",
      className: "rounded",
      onClick: () => {},
    },
    {
      label: "Yes",
      style: "primary",
      size: "extraSmall",
      className: "rounded",
      onClick: () => {},
    },
  ],
};

AlertModal.propTypes = {
  show: PropTypes.bool,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  icon: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string,
  }),
  footerButtons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      style: PropTypes.string,
      size: PropTypes.string,
      className: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
};
