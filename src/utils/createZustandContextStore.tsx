"use client";

import {
  createStore,
  useStore as useZustandStore,
  type StateCreator,
} from "zustand";

import { shallow } from "zustand/shallow";

import {
  createContext,
  useContext,
  useRef,
  type PropsWithChildren,
} from "react";

export function createZustandContextStore<
  State,
  PartialState extends Partial<State>
>(initializer: StateCreator<State, [], [], PartialState>) {
  type Store = ReturnType<typeof createStore<State, []>>;

  const StoreContext = createContext<Store | null>(null);

  function StoreProvider({
    children,
    initializer: providerInitializer,
  }: PropsWithChildren<{
    initializer: StateCreator<State, [], [], Omit<State, keyof PartialState>>;
  }>) {
    const storeRef = useRef<Store>();
    if (!storeRef.current) {
      storeRef.current = createStore<State, []>(
        (...args) =>
          ({
            ...initializer(...args),
            ...providerInitializer(...args),
          } as State)
      );
    }
    return (
      <StoreContext.Provider value={storeRef.current}>
        {children}
      </StoreContext.Provider>
    );
  }

  function useStore<T>(
    selector?: (state: State) => T,
    equalityFn?: (left: T, right: T) => boolean
  ): T {
    const store = useContext(StoreContext);
    if (!store) throw new Error("Missing StoreContext.Provider in the tree");
    return useZustandStore(
      store,
      selector ?? ((state) => state as unknown as T),
      equalityFn
    );
  }

  return [StoreProvider, useStore, shallow] satisfies [
    typeof StoreProvider,
    typeof useStore,
    typeof shallow
  ];
}
