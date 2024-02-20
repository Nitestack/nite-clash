import { type FC } from "react";

import Tabs from "@components/Tabs";

const ClashOfClansUpgradeTrackerProfile: FC = () => {
  return (
    <Tabs.Custom aria-label="profile switch">
      <Tabs.Item key="profile" title="Profile"></Tabs.Item>
      <Tabs.Item key="clan" title="Clan"></Tabs.Item>
      <Tabs.Item key="clanCapital" title="Clan Capital"></Tabs.Item>
    </Tabs.Custom>
  );
};

export default ClashOfClansUpgradeTrackerProfile;
