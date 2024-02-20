"use client";

import {
  Dropdown as _Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  type DropdownProps as _DropdownProps,
} from "@nextui-org/react";

const defaultProps: Omit<_DropdownProps, "children"> = {};

export type DropdownProps = _DropdownProps;

function Dropdown(props: DropdownProps) {
  return <_Dropdown {...defaultProps} {...props} />;
}

Dropdown.Item = DropdownItem;
Dropdown.Section = DropdownSection;
Dropdown.Menu = DropdownMenu;
Dropdown.Trigger = DropdownTrigger;

export default Dropdown;
