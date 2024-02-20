"use client";

import { type FC } from "react";
import { type Session } from "next-auth";

import {
  Navbar as _Navbar,
  NavbarContent,
  NavbarMenuToggle,
} from "@nextui-org/react";

import NavbarBrand from "@components/Navbar/Brand";
import MobileSidebar from "@components/Navbar/MobileSidebar";
import NavbarLinks from "@components/Navbar/Links";
import NavbarAccount from "@components/Navbar/Account";
import ThemeSwitch from "@components/Navbar/ThemeSwitch";

import Constants from "@constants/index";

const Navbar: FC<{ session: Session | null }> = ({ session }) => {
  return (
    <_Navbar isBordered position="sticky">
      <NavbarMenuToggle className="md:hidden" />
      <MobileSidebar routes={Constants.routes} />
      <NavbarBrand brandName={Constants.APP_NAME} />
      <NavbarLinks routes={Constants.routes} />
      <NavbarContent justify="end">
        <ThemeSwitch className="hidden lg:block" />
        <NavbarAccount session={session} />
      </NavbarContent>
    </_Navbar>
  );
};

export default Navbar;
