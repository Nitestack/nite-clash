"use client";

import {
  Card as _Card,
  CardHeader,
  CardBody,
  CardFooter,
  type CardProps as _CardProps,
} from "@nextui-org/react";

const defaultProps: _CardProps = {};

export type CardProps = _CardProps;

function Card(props: CardProps) {
  return <_Card {...defaultProps} {...props} />;
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
