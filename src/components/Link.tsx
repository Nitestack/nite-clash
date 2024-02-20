"use client";

import { forwardRef } from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Link as _Link, type LinkProps as _LinkProps } from "@nextui-org/react";

const defaultProps: Omit<NextLinkProps, "href"> & _LinkProps = {
  underline: "hover",
};

export type LinkProps = NextLinkProps &
  _LinkProps & {
    isActive?: boolean;
  };

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ isActive, ...props }, ref) => {
    return (
      <_Link
        {...defaultProps}
        color={isActive ? "primary" : "foreground"}
        as={NextLink}
        {...props}
        ref={ref}
      />
    );
  }
);

Link.displayName = "Link";

export default Link;
