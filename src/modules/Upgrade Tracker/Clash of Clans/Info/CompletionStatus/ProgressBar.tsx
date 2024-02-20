import { type FC, useMemo } from "react";
import { type ClashOfClansCostType } from "@coc/Base";
import { type Color } from "@types";

import { Progress, Tooltip } from "@nextui-org/react";

import {
  isRegularResource,
  getResourceImage,
  getTimeImage,
} from "@utils/clashOfClans";
import {
  formatNumber,
  convertMsToTime,
  round,
  keysFromObject,
} from "@utils/index";

const ClashOfClansUpgradeTrackerProgressBar: FC<{
  label: string;
  allCosts: Record<ClashOfClansCostType, number>;
  achievedCosts: Record<ClashOfClansCostType, number>;
  allTime?: number;
  achievedTime?: number;
  isWall?: boolean;
  tab: "cost" | "time";
  includeBuilders?: number;
}> = ({
  label,
  allCosts,
  achievedCosts,
  allTime,
  achievedTime,
  includeBuilders,
  tab,
  isWall,
}) => {
  //Calculate percentage based on which tab is chosen
  const percentage = useMemo(() => {
    if (tab === "cost") {
      //All regular resources are getting added together
      let allRegularResources = 0;
      let remainingRegularResources = 0;
      for (const costType of keysFromObject(allCosts).filter(
        isRegularResource
      )) {
        allRegularResources += allCosts[costType] ?? 0;
        remainingRegularResources += achievedCosts[costType] ?? 0;
      }
      const regularResourcePercentage =
        1 - remainingRegularResources / allRegularResources;
      //Resources like Dark Elixir is getting added seperatly
      const resources = [
        ...keysFromObject(allCosts)
          .filter((costType) => !isRegularResource(costType))
          .map(
            (costType) =>
              1 - (achievedCosts[costType] ?? 0) / (allCosts[costType] ?? 0)
          ),
        regularResourcePercentage,
      ].filter((resourcePercentage) => !isNaN(resourcePercentage)); //Filter out NaN values
      return (
        (resources.reduce((prev, curr) => prev + curr, 0) / resources.length) *
        100
      );
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return ((allTime! - achievedTime!) / allTime!) * 100;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, allCosts, achievedCosts, allTime, achievedTime]);
  const color: Color =
    percentage < (1 / 3) * 100
      ? "danger"
      : percentage < (2 / 3) * 100
      ? "warning"
      : "success";
  if (isWall && tab === "time") return null;
  else
    return (
      <>
        <div className="col-span-12 flex items-center sm:col-span-9 md:col-span-6 lg:col-span-8 xl:col-span-9">
          <Progress
            aria-label={label}
            isStriped
            color={color}
            value={percentage}
          />
        </div>
        <div className="col-span-12 flex items-center sm:col-span-3 md:col-span-6 lg:col-span-4 xl:col-span-3">
          <Tooltip
            placement="left-end"
            content={
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold">
                  {round(percentage, "ceil", 2)}%
                </h2>
                <div className="flex flex-col items-end">
                  {tab === "cost"
                    ? keysFromObject(allCosts)
                        .filter((resource) => !!allCosts[resource])
                        .map((resource, i) => (
                          <TextDisplay
                            key={resource + i.toString()}
                            color={color}
                            achievedValue={formatNumber(
                              allCosts[resource] -
                                (achievedCosts[resource] ?? 0)
                            )}
                            allValue={formatNumber(allCosts[resource])}
                            remainingValue={
                              !!achievedCosts[resource]
                                ? formatNumber(achievedCosts[resource])
                                : undefined
                            }
                            imageElement={getResourceImage(resource)}
                          />
                        ))
                    : allTime && (
                        <>
                          <TextDisplay
                            color={color}
                            achievedValue={convertMsToTime(
                              allTime - (achievedTime ?? 0),
                              true
                            )}
                            allValue={convertMsToTime(allTime, true)}
                            remainingValue={
                              achievedTime && achievedTime > 0
                                ? convertMsToTime(achievedTime, true)
                                : undefined
                            }
                            remainingTime={
                              achievedTime && achievedTime > 0
                                ? achievedTime
                                : undefined
                            }
                            imageElement={getTimeImage()}
                          />
                          {includeBuilders && includeBuilders > 1 && (
                            <>
                              <p className="self-center">
                                with {includeBuilders} builders:
                              </p>
                              <TextDisplay
                                color={color}
                                achievedValue={convertMsToTime(
                                  (allTime - (achievedTime ?? 0)) /
                                    includeBuilders,
                                  true
                                )}
                                allValue={convertMsToTime(
                                  allTime / includeBuilders,
                                  true
                                )}
                                remainingValue={
                                  achievedTime &&
                                  achievedTime / includeBuilders > 0
                                    ? convertMsToTime(
                                        achievedTime / includeBuilders,
                                        true
                                      )
                                    : undefined
                                }
                                remainingTime={
                                  achievedTime &&
                                  achievedTime / includeBuilders > 0
                                    ? achievedTime / includeBuilders
                                    : undefined
                                }
                                imageElement={getTimeImage()}
                              />
                            </>
                          )}
                        </>
                      )}
                </div>
              </div>
            }
          >
            <p className="text-center font-semibold">{label}</p>
          </Tooltip>
        </div>
      </>
    );
};

const TextDisplay: FC<{
  color: Color;
  achievedValue: string;
  remainingValue?: string;
  remainingTime?: number;
  allValue: string;
  imageElement: JSX.Element;
}> = ({
  color,
  achievedValue,
  remainingValue,
  remainingTime,
  allValue,
  imageElement,
}) => {
  return (
    <div className="flex items-center justify-end space-x-2">
      <p>
        <span>{achievedValue}</span> of <span>{allValue}</span>
        {remainingValue && (
          <>
            {" "}
            (<span>{remainingValue}</span>){" "}
            {remainingTime ? (
              <span>
                (
                {new Date(Date.now() + remainingTime).toLocaleDateString(
                  undefined,
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    weekday: "short",
                  }
                )}
                )
              </span>
            ) : undefined}
          </>
        )}
      </p>
      {imageElement}
    </div>
  );
};

export default ClashOfClansUpgradeTrackerProgressBar;
