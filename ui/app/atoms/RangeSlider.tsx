import React, { useState } from "react";
import { getTrackBackground, Range } from "react-range";

interface RangeSliderProps {
    label?: string;
    step?: number;
    minimum?: number;
    maximum?: number;
    onSlide: (values: number[]) => void;
    getSliderValues?: number[];
}

const RangeSlider: React.FC<RangeSliderProps> = ({
    label = "years",
    step = 1,
    minimum = 0,
    maximum = 100,
    onSlide,
    getSliderValues = [30, 100],
}) => {
    const [values, setValues] = useState<number[]>(getSliderValues);

    return (
        <div className="flex justify-center flex-wrap">
            <Range
                values={values}
                step={step}
                min={minimum}
                max={maximum}
                onChange={(newValues) => {
                    setValues(newValues);
                    onSlide(newValues);
                }}
                renderTrack={({ props, children }) => (
                    <div className="w-full">
                        <div className="mb-4 text-neutral-900 flex items-center">
                            {values[0]}
                            <span className="w-4 h-1 bg-neutral-300 mx-2"></span>
                            {values[1]} {label}
                        </div>
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            className="relative flex h-4"
                        >
                            <div
                                ref={props.ref}
                                className="h-1 w-full rounded overflow-hidden"
                                style={{
                                    background: getTrackBackground({
                                        values,
                                        colors: ["#D1D1DB", "#1E3A8A", "#D1D1DB"],
                                        min: minimum,
                                        max: maximum,
                                    }),
                                }}
                            >
                                {children}
                            </div>
                        </div>
                        <div className="flex justify-between pt-3 relative">
                            <span className="absolute left-0 top-1 w-1 h-2 text-neutral-900 bg-neutral-500">
                                {minimum}
                            </span>
                            <span className="absolute right-0 top-1 w-1 h-2 text-neutral-900 bg-neutral-500">
                                {maximum}
                            </span>
                        </div>
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        className="w-6 h-6 bg-basic-white shadow-sm rounded-full flex items-center justify-center outline-none"
                    >
                        <span className="w-4 h-4 rounded-full"></span>
                    </div>
                )}
            />
        </div>
    );
};

export default RangeSlider;