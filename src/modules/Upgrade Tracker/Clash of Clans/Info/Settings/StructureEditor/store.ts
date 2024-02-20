import { createZustandContextStore } from "@utils/createZustandContextStore";
import type Base from "@coc/Base";
import { type Village, type DBVillageType } from "@types";

import equal from "deep-equal";

import { createObjectFromArray, keysFromObject } from "@utils/index";
import { getItemAmount } from "@utils/clashOfClans";

export { shallow } from "zustand/shallow";

interface StructureStore {
  globalSliders: Record<string, number>;
  sliderValues: Record<string, number[]>;
  wallSliders: Record<string, number>;

  setGlobalSliderValue: (sliderID: string, value: number) => void;
  setGlobalSliderValueOnly: (sliderID: string, value: number) => void;
  setWallSlider: (wallLevel: number, value: number) => void;
  setWallSliders: (wallSliders: Record<string, number>) => void;

  setSliderValue: (sliderID: string, index: number, value: number) => void;
  setMultipleSliderValues: (sliderID: string, values: number[]) => void;

  setStore: (newStore: Partial<Omit<StructureStore, "setStore">>) => void;

  changesAvailable: (items: Base[], villageData: DBVillageType) => boolean;
  isValidWallAmount: (maxedAmount: number) => boolean;
}

export function getSliderValues(
  items: Base[],
  villageData: DBVillageType,
  hallLevel?: number,
  village?: Village
) {
  return {
    globalSliders: {
      builder: villageData.builder,
      ...createObjectFromArray(
        [...items.map((item) => item.id)],
        //Global slider value is the lowest level value of the structure
        (itemID) => {
          const item = villageData[itemID];
          return item ? Math.min(...item) : 0;
        }
      ),
    },
    sliderValues: createObjectFromArray(
      items.map((item) => item.id),
      //Get all existing data of the database
      (itemID) => {
        const item = villageData[itemID];
        return (
          item ??
          (Array(
            hallLevel && village
              ? getItemAmount(
                  items.find((i) => i.id === itemID)!,
                  hallLevel,
                  village
                )
              : 1
          ).fill(0) as number[])
        );
      }
    ),
    wallSliders: villageData.walls,
  };
}

export const [StructureStoreProvider, useStructureStore] =
  createZustandContextStore<
    StructureStore,
    Omit<StructureStore, "globalSliders" | "sliderValues" | "wallSliders">
  >((set, get) => ({
    // Set the value of the global slider with the given id
    setGlobalSliderValue: (sliderID, value) => {
      set((state) => {
        const globalSlider = state.globalSliders[sliderID];

        const sliderValues = state.sliderValues[sliderID]!;

        // Update the sliderValues array with the new global value
        const newSliderValues = Array(sliderValues.length).fill(
          value
        ) as number[];

        // Return the updated globalSliders and sliderValues objects
        return {
          ...(globalSlider === value // If the value hasn't changed, return the current state
            ? {}
            : {
                globalSliders: {
                  ...state.globalSliders,
                  [sliderID]: value,
                },
              }),
          ...(sliderValues.every((val, i) => val === newSliderValues[i])
            ? {}
            : {
                sliderValues: {
                  ...state.sliderValues,
                  [sliderID]: newSliderValues,
                },
              }),
        };
      });
    },

    // Set the value of the global slider with the given id
    setGlobalSliderValueOnly: (sliderID, value) => {
      set((state) => {
        const globalSlider = state.globalSliders[sliderID];

        // If the value hasn't changed, return the current state
        if (globalSlider === value) return state;

        // Return the updated globalSliders and sliderValues objects
        return {
          globalSliders: {
            ...state.globalSliders,
            [sliderID]: value,
          },
        };
      });
    },

    // Set the value of an individual slider with the given id and index
    setSliderValue: (sliderID, index, value) => {
      set((state) => {
        const sliders = state.sliderValues[sliderID]!;

        // If the value hasn't changed, return the current state
        if (sliders[index - 1] === value) return state;

        // Update the individual slider value in the sliderValues array
        return {
          sliderValues: {
            ...state.sliderValues,
            [sliderID]: [
              ...sliders.slice(0, index - 1),
              value,
              ...sliders.slice(index),
            ],
          },
        };
      });
    },

    // Set the values of a slider with the given id
    setMultipleSliderValues: (sliderID, values) => {
      set((state) => {
        const sliders = state.sliderValues[sliderID]!;

        // If the values hasn't changed, return the current state
        if (
          sliders.length === values.length &&
          sliders.every((val, i) => val === values[i])
        )
          return state;

        // Update the slider value in the sliderValues array
        return {
          sliderValues: {
            ...state.sliderValues,
            [sliderID]: values,
          },
        };
      });
    },

    setStore: (newStore) => set((state) => ({ ...state, ...newStore })),

    changesAvailable: (items, villageData) => {
      const store = getSliderValues(items, villageData);
      return !(
        equal(store.globalSliders, get().globalSliders) &&
        equal(store.sliderValues, get().sliderValues) &&
        equal(store.wallSliders, get().wallSliders)
      );
    },

    setWallSlider: (wallLevel, value) => {
      set((state) => {
        const slider = state.wallSliders[wallLevel.toString()];

        // If the values hasn't changed, return the current state
        if ((slider ?? 0) === value) return state;

        // Update the slider value in the sliderValues array
        return {
          wallSliders: {
            ...state.wallSliders,
            [wallLevel.toString()]: value,
          },
        };
      });
    },

    setWallSliders: (wallSliders) => {
      set((state) => {
        const currentWallSliders = state.wallSliders;

        // If the values hasn't changed, return the current state
        if (equal(currentWallSliders, wallSliders)) return state;

        // Update the slider value in the sliderValues array
        return {
          wallSliders: wallSliders,
        };
      });
    },

    isValidWallAmount: (maxedAmount) =>
      keysFromObject(get().wallSliders).reduce(
        (prev, currentKey) => get().wallSliders[currentKey]! + prev,
        0
      ) === maxedAmount,
  }));
