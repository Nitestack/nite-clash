import { type FC } from "react";
import { type Village } from "@types";
import type Base from "@coc/Base";

import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "@components/Link";

import UniversalControl from "@modules/Upgrade Tracker/Clash of Clans/Info/Settings/StructureEditor/UniversalControl";

const FAQAccordion: FC<{ items: Base[]; village: Village }> = ({
  items,
  village,
}) => {
  //Store
  return (
    <Accordion defaultExpandedKeys={["how", "control"]}>
      <AccordionItem
        key="why"
        subtitle="Click here to learn more"
        title="Why do I have to set all these building, trap and wall levels manually?"
      >
        <p>
          The public Clash of Clans API only provides basic player information
          like your
        </p>
        <ul className="list-disc">
          <li>
            <b>Town Hall</b> (and <b>Town Hall weapon</b>) / <b>Builder Hall</b>{" "}
            level,
          </li>
          <li>
            <b>troop</b>, <b>spell</b>, <b>siege machine</b>, <b>hero</b> and{" "}
            <b>pet</b> levels,
          </li>
          <li>
            and more (to find out more visit{" "}
            <Link href="https://developer.clashofclans.com" isExternal>
              Clash of Clans API
            </Link>
            )...
          </li>
        </ul>
        <p>In addition, building levels like your</p>
        <ul className="list-disc">
          <li>
            <b>Barracks</b>, <b>Dark Barracks</b>, <b>Spell Factory</b>,{" "}
            <b>Dark Spell Factory</b>, <b>Workshop</b> and <b>Pet House</b> of
            the Home Village,
          </li>
          <li>
            <b>Builder Barracks</b> of the Builder Base
          </li>
        </ul>
        <p>
          are calculated based on your API data, leaving out all remaining
          buildings and traps. <br />
          <b>
            As long as the public Clash of Clans API doesn&apos;t provide these
            levels, you have to set the levels yourself.
          </b>
        </p>
      </AccordionItem>
      <AccordionItem
        key="how"
        subtitle="Click here to learn more"
        title="How do I use this editor?"
      >
        <p>You can change the level(s) by</p>
        <ul className="list-disc">
          <li>
            toggling the <b>slider</b> or
          </li>
          <li>
            using the <b>number input field</b>
          </li>
        </ul>
        <p>
          You can also set to be maxed at a certain{" "}
          {village === "home" ? "Town" : "Builder"} Hall level by
        </p>
        <ul className="list-disc">
          <li>
            pressing the <b>plus</b> or <b>minus</b> button on the controls
            panel
          </li>
        </ul>
        <p>
          After you updated your structure levels, click on the
          &quot;Update&quot; button at the top or bottom of the page to update
          your structure levels.
        </p>
        <br />
        <b>TIP:</b> To get quick overview over your structure levels,
        <ul className="list-decimal">
          <li>enter the layout editor</li>
          <li>select a village and press &quot;Edit layout&quot;</li>
          <li>
            click the &quot;Remove all&quot; button on the top right of the tool
            side bar.
          </li>
        </ul>
        <p>
          Scrolling the bar along the bottom shows you all structure levels
          which you can directly enter here.
        </p>
      </AccordionItem>
      <AccordionItem
        key="control"
        subtitle="Click here to open the control panel"
        title="Controls"
      >
        <UniversalControl
          village={village}
          items={items.map((item) => ({
            id: item.id,
            name: item.name,
            type: item.type,
          }))}
        />
      </AccordionItem>
    </Accordion>
  );
};

export default FAQAccordion;
