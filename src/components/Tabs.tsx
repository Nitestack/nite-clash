"use client";

import { type FC } from "react";
import { type ReactRenderProp } from "@types";
import {
  Tabs as _Tabs,
  Tab,
  type TabsProps as _TabsProps,
} from "@nextui-org/react";

import Constants from "@constants/index";

const defaultTabsProps: Omit<_TabsProps, "children"> = {
  fullWidth: true,
  variant: "bordered",
  color: Constants.MAIN_COLOR,
};

export type TabProps<Item> = {
  items: Item[];
  children: ReactRenderProp<[item: Item]>;
} & Omit<_TabsProps, "children" | "items">;

function Tabs<TabItem>({ items, children, ...tabProps }: TabProps<TabItem>) {
  return (
    <_Tabs {...defaultTabsProps} {...tabProps}>
      {items.map((item) =>
        typeof children === "function" ? children(item) : children
      )}
    </_Tabs>
  );
}

const CustomTab: FC<_TabsProps> = (props) => {
  return <_Tabs {...defaultTabsProps} {...props} />;
};

Tabs.Custom = CustomTab;

Tabs.Item = Tab;

export default Tabs;
