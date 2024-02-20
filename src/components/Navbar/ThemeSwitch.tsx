import { type FC } from "react";

import { useTheme as useNextTheme } from "next-themes";
import { Switch } from "@nextui-org/react";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import { classNames } from "@utils/index";

import Constants from "@constants/index";

const ThemeSwitch: FC<{ className?: string }> = ({ className }) => {
  const { resolvedTheme, setTheme } = useNextTheme();
  return (
    <Switch size="lg"
      className={className}
      color={Constants.MAIN_COLOR}
      isSelected={(resolvedTheme ?? "dark") === "dark"}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={classNames(className, "h-4 w-4")} />
        ) : (
          <MoonIcon className={classNames(className, "h-4 w-4")} />
        )
      }
      onValueChange={(e) => setTheme(e ? "dark" : "light")}
    />
  );
};

export default ThemeSwitch;
