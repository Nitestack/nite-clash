import { type Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*!(*.stories|*.spec).{js,jsx,ts,tsx,html,mdx,css,scss,sass}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        cocgraybackground:
          "-webkit-linear-gradient(top, rgba(194, 198, 201, 0.8) 0%, rgba(176, 181, 187, 0.8) 49%, rgba(161, 168, 176, 0.8) 50%, rgba(157, 165, 176, 0.8) 100%)",
        cocgreenbackground:
          "linear-gradient(#7ED430 0%, #8ED838, #38A700 51%, #61BE1E)",
      },
      fontFamily: {
        coc: ["Supercell-Magic"],
        "coc-description": ["CCBackBeat"],
        "cr-description": ["Clash Text"],
        bs: ["Lilita One", "cursive"],
        bb: ["BadaBoom BB"],
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
