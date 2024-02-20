/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ms from "ms";
import { Duration, type DurationLikeObject } from "luxon";

import { twMerge } from "tailwind-merge";

/**
 * Converts various time formats into milliseconds
 * @param time The time format
 */
export function convertTimeToMs(time: string) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return time.split(" ").reduce((prev, curr) => prev + ms(curr), 0);
}

const _shortToLong = {
  years: "y",
  months: "mo",
  weeks: "w",
  days: "d",
  hours: "h",
  minutes: "m",
  seconds: "s",
  milliseconds: "ms",
} as const;

export type Units = (typeof _shortToLong)[keyof typeof _shortToLong];

/**
 * Converts milliseconds into various time formats
 * @param timeInMilliseconds The time in milliseconds
 * @param short whether the time format should be in short format
 * @param unitCount The number of units in the time format
 */
export function convertMsToTime(
  timeInMilliseconds: number,
  short?: boolean,
  unitCount?: number
) {
  //Unit map
  const shortToLongLuxon = {
    years: "y",
    months: "M",
    weeks: "w",
    days: "d",
    hours: "h",
    minutes: "m",
    seconds: "s",
    milliseconds: "S",
  } as Record<keyof DurationLikeObject, string>;
  const shortToLong = _shortToLong as Record<keyof DurationLikeObject, string>;
  //If there is no default unit count
  if (!unitCount) unitCount = 3;
  const duration = Duration.fromMillis(timeInMilliseconds).rescale();
  //Unit count
  const largestUnits: (keyof DurationLikeObject)[] = [];
  //Checks whether week is the highest value
  const isHighestValueWeek =
    keysFromObject(duration.toObject())[0]?.toLowerCase() === "weeks";
  //Loop over the first "unitCount" units
  for (const unit of keysFromObject(duration.toObject()).slice(0, unitCount)) {
    //Only supported units of the shortToLong map
    if (!(unit in shortToLong)) continue;
    //If the highest value unit is not "weeks", push it out and convert it to days
    if (!isHighestValueWeek && unit.toLowerCase() === "weeks") {
      largestUnits.push("days");
      continue;
    }
    largestUnits.push(unit as keyof DurationLikeObject);
  }
  //Conversion
  if (short) {
    const time = duration
      .shiftTo(...largestUnits)
      .toFormat(
        largestUnits
          .map((unit) => `${shortToLongLuxon[unit]}'${shortToLong[unit]}'`)
          .join(" "),
        {
          floor: true,
        }
      );
    if (time === "0ms") return "None";
    return time;
  } else {
    const time = duration.shiftTo(...largestUnits).toHuman();
    if (time === "0 milliseconds") return "None";
    return time;
  }
}

const formatter = Intl.NumberFormat("en", {
  notation: "compact",
  compactDisplay: "short",
  minimumFractionDigits: 2,
});

/**
 * Converts number into the Intl number format
 * @param number The number to convert
 */
export function formatNumber(number: number) {
  return formatter.format(number);
}

/**
 * Rounds a number with an option of fraction digits
 * @param num The number to round
 * @param mode Either "floor" or "ceil"
 * @param fractionDigits Optional fraction digits
 */
export function round(
  num: number,
  mode?: "floor" | "ceil",
  fractionDigits?: number
) {
  const multiplier = Math.pow(10, fractionDigits ?? 0);
  const roundedNum =
    mode === "floor"
      ? Math.floor(num * multiplier)
      : mode === "ceil"
      ? Math.ceil(num * multiplier)
      : Math.round(num * multiplier);
  return roundedNum / multiplier;
}

/**
 * Capitalizes the first letter of the word
 * @param text The text
 */
export function toCapitalize(text: string) {
  if (text.length === 0) {
    return text; // Return an empty string if input is empty
  }
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}

/**
 * Converts all class names into one class string
 * @param classLists The class(es)
 */
export function classNames(...classLists: Parameters<typeof twMerge>) {
  return twMerge(classLists);
}

/**
 * Returns an object with the array keys
 * @param array The key array
 * @param defaultValue The default value for each key
 */
export function createObjectFromArray<T>(
  array: string[],
  defaultValue: T | ((item: string) => T)
) {
  //Create an object
  const obj: Record<string, T> = {};
  //Looping over all array items
  for (let i = 0; i < array.length; i++) {
    const key = array[i]!;
    obj[key] =
      typeof defaultValue === "function"
        ? (defaultValue as (item: string) => T)(key)
        : defaultValue;
  }
  return obj;
}

export function keysFromObject<T extends object>(obj: T) {
  return Object.keys(obj) as (keyof T)[];
}