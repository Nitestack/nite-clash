import {
  type FC,
  type FormEvent,
  type FocusEvent,
  useEffect,
  useState,
} from "react";

import {
  useStructureStore,
  shallow,
} from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/store";

import { Input, type InputProps } from "@nextui-org/react";
import _Slider from "@components/Slider";
import ResponsiveImage from "@components/ResponsiveImage";

import { classNames } from "@utils/index";

const Slider: FC<
  {
    ariaLabel: string;
    min?: number;
    max: number;
    imageUrl: string;
    sliderValue: number;
    onSlide: JSX.IntrinsicElements["input"]["onInput"];
  } & Partial<Pick<JSX.IntrinsicElements["input"], "onBlur">> &
    Partial<Pick<InputProps, "defaultValue" | "onValueChange" | "value">>
> = ({
  ariaLabel,
  imageUrl,
  min: minValue,
  max,
  onValueChange,
  value,
  onBlur,
  defaultValue,
  onSlide,
  sliderValue,
}) => {
  const min = minValue ?? 0;
  return (
    <div className="grid grid-cols-4 place-items-center gap-3">
      <ResponsiveImage alt={ariaLabel} className="h-14 w-20" src={imageUrl} />
      <_Slider
        className="col-span-2"
        aria-label={ariaLabel}
        onInput={onSlide}
        min={min}
        max={max}
        value={sliderValue}
      />
      <Input
        className={classNames(
          max.toString().length > 2 ? "w-[4.125rem]" : "w-16"
        )}
        aria-label={ariaLabel}
        defaultValue={defaultValue}
        onBlur={onBlur}
        onValueChange={onValueChange}
        type="number"
        min={min ?? 0}
        max={max}
        value={value}
      />
    </div>
  );
};

export const WallSlider: FC<{
  wallLevel: number;
  max: number;
  imageUrl: string;
}> = ({ wallLevel, max, imageUrl }) => {
  //Store
  const { sliderValue, setWallSlider } = useStructureStore((state) => ({
    sliderValue: state.wallSliders[wallLevel.toString()] ?? 0,
    setWallSlider: state.setWallSlider,
  }));

  //State to keep track of the user input
  const [value, setValue] = useState(sliderValue.toString());

  useEffect(() => {
    setValue(sliderValue.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderValue]);

  //Store setter
  function setIndividualValueToStore(value?: string) {
    //Validate input and parsing it into a number
    const newLevel = value ? parseInt(value) : 0;
    //If the new level is higher than the maximum level
    if (newLevel > max) return;
    setWallSlider(wallLevel, newLevel);
  }

  //Input handler for internal state
  function onLevelChange(ev: FocusEvent<HTMLInputElement>) {
    setIndividualValueToStore(ev.currentTarget.value);
  }
  //Input handler for slider
  function onSlide(ev: FormEvent<HTMLInputElement>) {
    setIndividualValueToStore(ev.currentTarget.value);
  }
  //Input handler for user input state
  function onInput(value: string) {
    setValue(value);
  }
  return (
    <Slider
      ariaLabel={"wall" + wallLevel.toString()}
      value={value}
      sliderValue={sliderValue}
      defaultValue={sliderValue.toString()}
      max={max}
      min={0}
      onBlur={onLevelChange}
      onSlide={onSlide}
      onValueChange={onInput}
      imageUrl={imageUrl}
    />
  );
};

export const IndividualSlider: FC<{
  structure: { name: string; id: number; images: string[] };
  max: number;
  min?: number;
}> = ({ structure: { name, id, images }, max, min }) => {
  //Store
  const { sliderValue, setSliderValue } = useStructureStore(
    (state) => ({
      sliderValue: state.sliderValues[name]?.[id - 1] ?? 0,
      setSliderValue: state.setSliderValue,
    }),
    shallow
  );

  //State to keep track of the user input
  const [value, setValue] = useState(sliderValue.toString());

  useEffect(() => {
    setValue(sliderValue.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderValue]);

  //Store setter
  function setIndividualValueToStore(value?: string) {
    //Validate input and parsing it into a number
    const newLevel = value ? parseInt(value) : min ?? 0;
    //If the new level is higher than the maximum level
    if (newLevel > max) return;
    setSliderValue(name, id, newLevel);
  }

  //Input handler for internal state
  function onLevelChange(ev: FocusEvent<HTMLInputElement>) {
    setIndividualValueToStore(ev.currentTarget.value);
  }
  //Input handler for slider
  function onSlide(ev: FormEvent<HTMLInputElement>) {
    setIndividualValueToStore(ev.currentTarget.value);
  }
  //Input handler for user input state
  function onInput(value: string) {
    setValue(value);
  }

  return (
    <Slider
      ariaLabel={name + id.toString()}
      value={value}
      sliderValue={sliderValue}
      defaultValue={sliderValue.toString()}
      max={max}
      min={min}
      onSlide={onSlide}
      onBlur={onLevelChange}
      onValueChange={onInput}
      imageUrl={images[sliderValue]!}
    />
  );
};

export const GlobalSlider: FC<{
  name: string;
  minValues: number[];
  max: number;
  images: string[];
}> = ({ name, minValues, max, images }) => {
  //Store
  const {
    globalValue,
    setGlobalSliderValue,
    setGlobalSliderValueOnly,
    setMultipleSliderValues,
  } = useStructureStore(
    (state) => ({
      globalValue: state.globalSliders[name] ?? 0,
      setGlobalSliderValue: state.setGlobalSliderValue,
      setGlobalSliderValueOnly: state.setGlobalSliderValueOnly,
      setMultipleSliderValues: state.setMultipleSliderValues,
    }),
    shallow
  );

  //State to keep track of the user input
  const [globalState, setGlobalState] = useState(globalValue.toString());

  // useEffect(() => {
  //   setGlobalState(globalValue.toString());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [globalValue]);

  //Adjust the value to be in range
  function createValueInRange(value: number, min: number) {
    //If the value exceeds the max value
    if (value > max) return max;
    //If the value is lower than the min value
    else if (value < min) return min;
    //Else the value is valid and is returned
    else return value;
  }

  //Store setter
  function setGlobalValueToStore(value?: string) {
    //Validate input and parsing it into a number
    const newLevel = value ? parseInt(value) : 0;
    //If the new level is higher than the maximum level
    if (newLevel > max) {
      setGlobalState(globalValue.toString());
      return;
    }
    //Set input state
    setGlobalState(newLevel.toString());
    //If new level is higher than the current value
    if (newLevel > globalValue) setGlobalSliderValue(name, newLevel);
    else {
      setGlobalSliderValueOnly(name, newLevel);
      setMultipleSliderValues(
        name,
        minValues.map((minValue) => createValueInRange(newLevel, minValue))
      );
    }
  }

  //Input handler for internal state
  function onLevelChange(ev: FocusEvent<HTMLInputElement>) {
    setGlobalValueToStore(ev.currentTarget.value);
  }
  //Input handler for slider
  function onSlide(ev: FormEvent<HTMLInputElement>) {
    setGlobalValueToStore(ev.currentTarget.value);
  }
  //Input handler for user input state
  function onInput(value: string) {
    setGlobalState(value);
  }

  return (
    <Slider
      ariaLabel={name}
      defaultValue={globalValue.toString()}
      sliderValue={globalValue}
      value={globalState}
      min={0}
      max={max}
      onSlide={onSlide}
      onValueChange={onInput}
      onBlur={onLevelChange}
      imageUrl={images[globalValue]!}
    />
  );
};
