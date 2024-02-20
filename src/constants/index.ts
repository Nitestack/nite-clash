import { type Color, type NavbarItem } from "@types";

export default class Constants {
  public static APP_NAME = "NiteClash";
  public static APP_DESCRIPTION = "";

  public static MAIN_COLOR: Color = "primary";

  public static routes: NavbarItem[] = [
    {
      name: "Upgrade Tracker",
      url: "/upgrade-tracker",
      links: [
        {
          name: "Overview",
          url: "",
          description: "Introducing you to the upgrade trackers",
        },
        {
          name: "Clash of Clans",
          url: "/coc",
          description:
            "Quick overview over the Clash of Clans upgrade tracker features",
        },
        {
          name: "Boom Beach",
          url: "/bb",
          description:
            "Quick overview over the Boom Beach upgrade tracker features",
        },
      ],
    },
    {
      name: "Stats Tracker",
      url: "/stats-tracker",
      links: [
        {
          name: "Overview",
          url: "",
          description: "Introducing you to the stats trackers",
        },
        {
          name: "Clash of Clans",
          url: "/coc",
          description: "Quick overview of the Clash of Clans stats tracker",
        },
        {
          name: "Clash Royale",
          url: "/cr",
          description: "Quick overview of the Clash Royale stats tracker",
        },
        {
          name: "Brawl Stars",
          url: "/bs",
          description: "Quick overview of the Brawl Stars stats tracker",
        },
      ],
    },
    {
      name: "About Us",
      url: "/about",
    },
  ];
}
