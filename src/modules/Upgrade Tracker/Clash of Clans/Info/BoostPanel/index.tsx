import { type FC } from "react";
import { type Village } from "@types";

import Card from "@components/Card";

import Potions from "@modules/Upgrade Tracker/Clash of Clans/Info/BoostPanel/Potions";

const BoostPanel: FC<{ village: Village }> = ({ village }) => {
  return (
    <Card className="h-full" isHoverable>
      <Card.Header>
        <p className="text-center text-xl">Boost Panel</p>
      </Card.Header>
      <Card.Body className="space-y-4">
        <Potions village={village} />
      </Card.Body>
    </Card>
  );
};

export default BoostPanel;
