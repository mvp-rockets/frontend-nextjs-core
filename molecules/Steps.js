import classnames from "classnames";
import PropTypes from "prop-types";

const StepList = ({
  types,
  view,
  className,
  stepNum,
  title,
  status,
  position,
}) => {
  const isHorizontal = view === "horizontal";
  const isVertical = view === "vertical";
  const isEmpty = types === "empty";
  const isCompleted = status === "completed";
  const isCurrent = status === "current";
  const isNotStated = status === "notStated";
  const isIcon = types === "icon";
  const isNoIcon = types === "noIcon";
  const isTopPosition = position === "top";

  return (
    <div
      view={view}
      types={types}
      status={status}
      position={position}
      className={classnames(
        [className],
        "relative after:content-[''] last:flex-none last:after:hidden",
        {
          "flex items-center flex-auto after:w-full after:h-0.5": isHorizontal,
          "after:absolute after:left-4 after:top-2 after:w-0.5 after:h-full pb-14 last:pb-0":
            isVertical,
          "after:left-[3px]": isEmpty,
          "after:bg-primary-900": isCompleted,
          "after:bg-neutral-300": isCurrent,
        }
      )}
    >
      <div className="flex items-center relative text-sm z-10">
        <div
          className={classnames(
            [className],
            "flex items-center justify-center rounded-full overflow-hidden after:absolute after:content-[''] after:w-4 after:h-4 after:rounded-full",
            {
              "w-8 h-8 after:hidden": isIcon,
              "indent-10 border-neutral-300 w-8 h-8 after:block": isNoIcon,
              "indent-10 w-2 h-2 after:hidden outline outline-4 outline-white":
                isEmpty,
              "bg-primary-900 text-white after:bg-white": isCompleted,
              "bg-white border-[1px] border-primary-900 text-primary-900 after:bg-primary-900":
                isCurrent,
              "bg-white border-[1px] border-neutral-300 text-neutral-600 after:bg-neutral-300":
                isNotStated,
            }
          )}
        >
          {stepNum}
        </div>
        <div
          className={classnames([className], {
            "left-2/4 -translate-x-2/4 text-center w-28": isHorizontal,
            "ml-2": isVertical,
            absolute: isHorizontal,
            "top-10 icon": isIcon,
            "top-10": isNoIcon,
            "top-4": isEmpty,
            "-top-8": isTopPosition,
            "text-neutral-900": isCompleted,
            "text-primary-900": isCurrent,
            "text-neutral-600": isNotStated,
          })}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

const Steps = ({ className, types, view, position, stepListData }) => {
  const isHorizontal = view === "horizontal";
  const isVertical = view === "vertical";

  return (
    <div
      className={classnames([className], {
        "px-9 py-6": isHorizontal,
        "p-0": isVertical,
      })}
    >
      <div
        className={classnames([className], "flex", {
          "flex-row": isHorizontal,
          "flex-col": isVertical,
        })}
      >
        {stepListData.map(({ stepNum, title, status }, index) => (
          <StepList
            key={index}
            types={types}
            view={view}
            stepNum={stepNum}
            title={title}
            position={position}
            status={status}
          />
        ))}
      </div>
    </div>
  );
};

StepList.defaultProps = {
  types: "icon",
  view: "horizontal",
  className: "",
  stepNum: null,
  title: null,
  status: "notStated",
  position: "bottom",
};

StepList.propTypes = {
  types: PropTypes.string,
  view: PropTypes.string,
  className: PropTypes.string,
  stepNum: PropTypes.node,
  title: PropTypes.node,
  status: PropTypes.oneOf(["completed", "current", "notStated"]),
  position: PropTypes.oneOf(["top", "bottom"]),
};

Steps.defaultProps = {
  className: "",
  types: "icon",
  view: "horizontal",
  position: "bottom",
  stepListData: [],
};

Steps.propTypes = {
  className: PropTypes.string,
  types: PropTypes.string,
  view: PropTypes.string,
  position: PropTypes.string,
  stepListData: PropTypes.arrayOf(
    PropTypes.shape({
      stepNum: PropTypes.node,
      title: PropTypes.node,
      status: PropTypes.oneOf(["completed", "current", "notStated"]),
    })
  ),
};

export default Steps;
