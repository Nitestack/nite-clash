import { type FC } from "react";
import { type Session } from "next-auth";

import { signIn } from "next-auth/react";

import {
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import Button from "@components/Button";
import ThemeSwitch from "@components/Navbar/ThemeSwitch";

import Constants from "@constants/index";

const NavbarAccount: FC<{ session: Session | null }> = ({ session }) => {
  //Auth
  if (session?.user) {
    const {
      user: { email, name, image },
    } = session;
    return (
      <Dropdown placement="bottom-end">
        <NavbarItem>
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color={Constants.MAIN_COLOR}
              size="sm"
              src={image ? image : "/images/user.png"}
            />
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu aria-label="Profile Actions" color={Constants.MAIN_COLOR}>
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="text-center font-bold">Signed in as</p>
            <p className="text-center font-bold">
              {name} ({email})
            </p>
          </DropdownItem>
          <DropdownItem key="settings" showDivider>
            My Settings
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics" showDivider>
            Analytics
          </DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback" showDivider>
            Help & Feedback
          </DropdownItem>
          <DropdownItem
            as={ThemeSwitch}
            className="flex items-center justify-center lg:hidden"
            key="settings"
          />
          <DropdownItem key="logout" showDivider color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  } else
    return (
      <>
        <NavbarItem
          onClick={() => {
            void signIn("google");
          }}
        >
          Login
        </NavbarItem>
        <NavbarItem>
          <Button.Link color="primary" variant="flat" href="/register">
            Sign Up
          </Button.Link>
        </NavbarItem>
      </>
    );
};

export default NavbarAccount;
