import { type FC, type JSX } from "react";

import { classNames } from "@utils/index";

export type SliderProps = JSX.IntrinsicElements["input"];

const Slider: FC<SliderProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={classNames(
        "h-1/5 w-full appearance-none rounded-xl bg-cocgreenbackground opacity-70 outline-none duration-200 transition-opacity hover:opacity-100",
        "[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white",
        "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white",
        className
      )}
      type="range"
    />
  );
};

export default Slider;
