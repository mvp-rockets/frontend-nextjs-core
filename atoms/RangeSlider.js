import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getTrackBackground, Range } from "react-range";
import IcomoonIcon from "./IcomoonIcon";

const RangeSlider = ({
  step = 1,
  min = 0,
  max = 100,
  label = "years",
  colorFrom = "#D1D1DB",
  colorTo = "#1E3A8A",
  onSlide = () => { },
  sliderValues = [30, 100],
}) => {
  const [values, setValues] = useState(
    sliderValues ? sliderValues : [min, max]
  );
  useEffect(
    () => setValues(sliderValues ? sliderValues : [min, max]),
    [sliderValues]
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={(values) => {
          setValues(values);
          onSlide(values);
        }}
        renderTrack={({ props, children }) => (
          <div className="w-full">
            <div className="mb-4 text-neutral-900 flex items-center" id="output">
              {values[0]}
              <span className="w-4 h-1 bg-neutral-300 inline-block mx-2"></span>
              {values[1]} {label}
            </div>
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className="flex relative"
            >
              <div
                ref={props.ref}
                className="h-1 w-full rounded overflow-hidden"
                style={{
                  background: getTrackBackground({
                    values,
                    colors: [colorFrom, colorTo, colorFrom],
                    min: min,
                    max: max,
                  }),
                }}
              >
                {children}
              </div>
            </div>
            <div className="label relative w-full flex justify-between pt-3">
              <span className="after:w-1 after:h-2 text-neutral-900 after:bg-neutral-500 after:absolute after:left-0 after:top-1">
                {min}
              </span>
              <span className="after:w-1 after:h-2 text-neutral-900 after:bg-neutral-500 after:absolute after:right-0 after:top-1">
                {max}
              </span>
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            className={`flex items-center justify-center w-6 h-6 bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)] outline-0 rounded-full`}
          >
            <IcomoonIcon icon={"range-thumb"} size={10} />
          </div>
        )}
      />
    </div>
  );
};

export default RangeSlider;
RangeSlider.propTypes = {
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  label: PropTypes.string,
  colorFrom: PropTypes.string,
  colorTo: PropTypes.string,
};
