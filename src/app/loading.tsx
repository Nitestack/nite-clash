"use client";

import { Spinner } from "@nextui-org/react";

import Constants from "@constants/index";

export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <Spinner size="xl" color={Constants.MAIN_COLOR} label="Loading..." />
    </div>
  );
}
