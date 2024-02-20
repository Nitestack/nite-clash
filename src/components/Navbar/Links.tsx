import { type FC } from "react";
import { type NavbarItem as NavbarItemType } from "@types";

import { usePathname } from "next/navigation";

import {
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import Button from "@components/Button";
import Link from "@components/Link";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

const NavbarLinks: FC<{
  routes: NavbarItemType[];
}> = ({ routes }) => {
  const pathname = usePathname();
  return (
    <NavbarContent className="hidden md:flex">
      {routes.map((route, i) => {
        if (route.links) {
          return (
            <Dropdown key={route.url + i.toString()}>
              <NavbarItem isActive={pathname === route.url}>
                <DropdownTrigger>
                  <Button.Ref
                    color="default"
                    endIcon={<ChevronDownIcon className="h-4 w-4" />}
                    radius="xl"
                    variant="light"
                  >
                    {route.name}
                  </Button.Ref>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label={route.name}
                className="w-[340px]"
                itemStyles={{
                  base: "gap-4",
                  wrapper: "py-3",
                }}
              >
                {route.links?.map((dropdownRoute, i) => (
                  <DropdownItem
                    key={dropdownRoute.url + i.toString()}
                    description={dropdownRoute.description}
                    startContent={dropdownRoute.icon}
                  >
                    <Link
                      isActive={pathname === route.url}
                      href={`${route.url}${dropdownRoute.url}`}
                    >
                      {dropdownRoute.name}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          );
        } else {
          return (
            <NavbarItem key={route.url} className="px-4">
              <Button.Link href={route.url} isActive={pathname === route.url}>
                <p className="text-base">{route.name}</p>
              </Button.Link>
            </NavbarItem>
          );
        }
      })}
    </NavbarContent>
  );
};

export default NavbarLinks;
