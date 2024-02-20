import { type FC } from "react";

import { NavbarBrand as _NavbarBrand } from "@nextui-org/react";
import Link from "@components/Link";
import ResponsiveImage from "@components/ResponsiveImage";

const NavbarBrand: FC<{
  brandName: string;
}> = ({ brandName }) => {
  return (
    <_NavbarBrand className="ml-2">
      <Link className="flex items-center justify-center" href="/">
        <ResponsiveImage className="h-9 w-9" alt="Logo" src="/favicon.ico" />
        <p className="ml-2 text-2xl font-semibold uppercase">{brandName}</p>
      </Link>
    </_NavbarBrand>
  );
};

export default NavbarBrand;
