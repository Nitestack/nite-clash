"use client";

import { forwardRef } from "react";
import {
  Button as _Button,
  ButtonGroup,
  type ButtonProps as _ButtonProps,
} from "@nextui-org/react";
import Link, { type LinkProps } from "@components/Link";

import Constants from "@constants/index";

const defaultProps: _ButtonProps = {
  color: Constants.MAIN_COLOR,
  variant: "solid",
  spinnerPlacement: "start",
};

export type ButtonProps = _ButtonProps;

function Button(props: ButtonProps) {
  return <_Button as="button" {...defaultProps} {...props} />;
}

const RefButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <_Button {...defaultProps} {...props} ref={ref} />;
});

RefButton.displayName = "RefButton";

function ButtonSuccess(props: ButtonProps) {
  return <Button variant="solid" color="success" {...props} />;
}

export type ButtonCancelProps = Omit<ButtonProps, "children"> & {
  children?: JSX.Element;
};

function ButtonCancel({ children, ...buttonProps }: ButtonCancelProps) {
  return (
    <Button variant="ghost" color="danger" spinner={children} {...buttonProps}>
      Cancel
    </Button>
  );
}

export type ButtonLinkProps = LinkProps & Omit<ButtonProps, "href">;

function ButtonLink({ isActive, ...props }: ButtonLinkProps) {
  return (
    <Button
      as={Link}
      radius="xl"
      variant="light"
      color={isActive ? "primary" : "default"}
      underline={false}
      {...props}
    />
  );
}

export type ButtonIconProps = Omit<ButtonProps, "isIconOnly">;

function ButtonIcon(props: ButtonIconProps) {
  return <Button {...props} isIconOnly />;
}

const RefButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  (props, ref) => {
    return <_Button {...defaultProps} {...props} isIconOnly ref={ref} />;
  }
);

RefButtonIcon.displayName = "RefButtonIcon";

Button.Success = ButtonSuccess;
Button.Cancel = ButtonCancel;

Button.Group = ButtonGroup;

ButtonIcon.Ref = RefButtonIcon;
Button.Icon = ButtonIcon;

Button.Link = ButtonLink;

Button.Ref = RefButton;

export default Button;
