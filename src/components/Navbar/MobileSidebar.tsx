import { type FC } from "react";
import { type NavbarItem } from "@types";

import { usePathname } from "next/navigation";

import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "@components/Link";

const MobileSidebar: FC<{ routes: NavbarItem[] }> = ({ routes }) => {
  const pathname = usePathname();
  return (
    <NavbarMenu>
      {routes.map((route, i) => (
        <NavbarMenuItem key={route.url + i.toString()}>
          <Link href={route.url} isActive={pathname === route.url} size="lg">
            {route.name}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};

export default MobileSidebar;
