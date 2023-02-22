import React from "react";
import PropTypes from "prop-types";
import Heading from "../atoms/Heading";
import Image from "next/image";
import Text from "../atoms/Text";
import Modal from "./Modal";
import IcomoonIcon from "../atoms/IcomoonIcon";

const AlertModal = ({
  modalHeading = "Warning Modal",
  cardWidth = "max-w-md",
  modalSubHeading = "",
  modalIcon = "",
  primaryBtnLabel = "Yes",
  secondaryBtnLabel = "No",
  showModal,
  closeModalPopup,
  cardPadding = "p-8 pb-6",
  cardRadius = "rounded-sm",
  modalSecondaryBtn = false,
  primaryBtnClick
}) => {
  return (
    <>
      <Modal
        cardRadius={cardRadius}
        cardPadding={cardPadding}
        cardWidth={cardWidth}
        showModal={showModal}
        modalHeader={false}
        modalSecondaryBtn={modalSecondaryBtn}
        secondaryBtnLabel={secondaryBtnLabel}
        primaryBtnLabel={primaryBtnLabel}
        closeModalPopup={closeModalPopup}
        primaryBtnClick={primaryBtnClick}
      >
        <div
          className={`flex`}
        >
          {modalIcon && (
            <div className="flex-shrink-0 mr-4">
              <IcomoonIcon icon={modalIcon} size={34} />
            </div>
          )}
          <div>
            {modalHeading && (

              <Heading
                type="h6"
                className={`font-bold mb-2`}
              >
                {modalHeading}
              </Heading>
            )}
            {modalSubHeading && (
              <Text
                className={`text-sm text-gray-500`}
              >
                {modalSubHeading}
              </Text>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AlertModal;
AlertModal.propTypes = {
  showModal: PropTypes.bool,
  cardWidth: PropTypes.string,
  cardPadding: PropTypes.string,
  cardRadius: PropTypes.string,
  modalInnerWidth: PropTypes.string,
  modalInnerAlignment: PropTypes.string,
  modalButtonAlign: PropTypes.string,
  modalBtnBg: PropTypes.string,
  modalHeading: PropTypes.string,
  modalSubHeading: PropTypes.string,
  isImgAvail: PropTypes.any,
  closeModalPopup: PropTypes.func,
  onClick: PropTypes.func,
  modalIcon: PropTypes.string,
  primaryBtnLabel: PropTypes.string,
  secondaryBtnLabel: PropTypes.string,
  modalHeadingClass: PropTypes.string,
  modalSubHeadingClass: PropTypes.string,
  modalSecondaryBtn: PropTypes.bool,
  primaryBtnClick: PropTypes.func,

};
