import classnames from "classnames";
import PropTypes from "prop-types";
import Button from "../atoms/Button";

const Popover = ({
  id,
  position,
  popoverWidth,
  arrow,
  radius,
  className,
  children,
  hoverText,
}) => {
  const popoverPositions = {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
    topLeft: "topLeft",
    topRight: "topRight",
    bottomLeft: "bottomLeft",
    bottomRight: "bottomRight",
    leftTop: "leftTop",
    leftBottom: "leftBottom",
    rightTop: "rightTop",
    rightBottom: "rightBottom",
  };

  const positionClass = popoverPositions[position] || "top";

  const classNames = classnames(
    className,
    "bg-white drop-shadow-md hidden group-hover:flex absolute before::content-[''] before:absolute before:w-0 before:h-0 before:border-8 before:border-solid before:border-transparent",
    arrow ? "before:inline-flex" : "before:hidden",
    popoverWidth,
    radius,
    {
      "bottom-full left-2/4 -translate-x-2/4 mb-2 before:-bottom-4 before:border-t-white before:left-2/4 before:-translate-x-2/4":
        positionClass === "top",
    }
  );

  return (
    <div className="relative w-fit group">
      <Button label={hoverText} />
      <div id={id} position={position} className={classNames}>
        {children}
      </div>
    </div>
  );
};

Popover.defaultProps = {
  id: "",
  position: "top",
  popoverWidth: "w-80",
  arrow: true,
  radius: "rounded",
  className: "",
  children: "",
  hoverText: "",
};

Popover.propTypes = {
  className: PropTypes.string,
  position: PropTypes.string,
  children: PropTypes.node,
  hoverText: PropTypes.string,
};

export default Popover;
