import Image from "next/image";
import PropTypes from "prop-types";
import { useRef } from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import useClickOutside from "./Common/ClickOutSide";

const Modal = ({
  children,
  isHeader,
  title,
  closeIcon,
  titleStyle,
  width,
  height,
  onClick,
  close,
  iconSize,
  radius,
  footerButtons,
  ...props
}) => {
  const dialogRef = useRef();
  useClickOutside(dialogRef, close);
  return (
    <div
      className={`dialog fixed flex items-center justify-center w-full h-full top-0 left-0 bg-black bg-opacity-70 z-[20000] px-4 md:px-0 ${props.className}`}
    >
      <div
        ref={dialogRef}
        className={`bg-white h-auto ${radius} ${width} ${height} `}
      >
        {isHeader && (
          <div className="dialog-header border-b flex items-center justify-between gap-10 px-6 py-4">
            {title && (
              <Text className={`text-neutral-900 font-bold ${titleStyle}`}>
                {title}
              </Text>
            )}
            <div className={`cursor-pointer`} onClick={close}>
              <Image
                src={closeIcon}
                width={iconSize.width}
                height={iconSize.height}
              />
            </div>
          </div>
        )}

        <div className="px-6 py-4">{children}</div>
        {footerButtons && footerButtons.length > 0 && (
          <div
            className={`flex justify-end gap-2  px-6 py-4 ${
              isHeader && "border-t"
            }`}
          >
            {footerButtons?.map((button, i) => {
              return (
                <Button
                  key={i}
                  style={button.style}
                  label={button.label}
                  size={button.size}
                  onClick={button.onClick}
                  className={button.className}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

Modal.defaultProps = {
  children: "Body",
  title: "Dialog Box",
  closeIcon: "/images/icons/close-b.svg",
  isHeader: true,
  titleStyle: "",
  width: "w-[416px]",
  height: "h-max",
  onClick: () => true,
  close: () => true,
  iconSize: {
    width: 16,
    height: 16,
  },
  radius: "rounded",
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

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  closeIcon: PropTypes.string,
  isHeader: PropTypes.bool,
  titleStyle: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  close: PropTypes.func,
  iconSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  radius: PropTypes.string,
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
