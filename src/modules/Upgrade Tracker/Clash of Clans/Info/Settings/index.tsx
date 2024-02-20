import { type FC } from "react";
import { type Village } from "@types";

import Card from "@components/Card";

import APIUpdateButton from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/APIUpdateButton";
import ModalEditor from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/ModalEditor";

const Settings: FC<{ village: Village }> = ({ village }) => {
  return (
    <Card className="h-full" isHoverable>
      <Card.Header>
        <p className="text-center text-xl">Settings</p>
      </Card.Header>
      <Card.Body className="space-y-4">
        <APIUpdateButton />
        <ModalEditor village={village} />
      </Card.Body>
    </Card>
  );
};

export default Settings;
