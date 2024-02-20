import { type FC } from "react";
import { type Village } from "@types";

import Card from "@components/Card";

import VillageDisplay from "@modules/Upgrade Tracker/Clash of Clans/Info/VillageDisplay";
import CompletionStatus from "@modules/Upgrade Tracker/Clash of Clans/Info/CompletionStatus";
import BoostPanel from "@modules/Upgrade Tracker/Clash of Clans/Info/BoostPanel";
import Settings from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings";

const ClashOfClansUpgradeTrackerInfo: FC<{ village: Village }> = ({
  village,
}) => {
  return (
    <Card fullWidth>
      <Card.Body>
        <div className="grid gap-2 md:grid-cols-2 md:grid-rows-5">
          <div className="md:row-span-3">
            <VillageDisplay village={village} />
          </div>
          <div className="md:col-start-1 md:row-span-2 md:row-start-4">
            <Settings village={village} />
          </div>
          <div className="md:col-start-2 md:row-span-3 md:row-start-1">
            <CompletionStatus village={village} />
          </div>
          <div className="md:row-span-2 md:row-start-4">
            <BoostPanel village={village} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ClashOfClansUpgradeTrackerInfo;
