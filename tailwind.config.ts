import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
        // this background images only can be used by component
        "diet-kantong-plastik": 'url(./../pictures/diet-plastik-indonesia.webp)',
        "alcorprime": 'url(./../pictures/alcorprime.webp)',
        "cyber-link": 'url(./../pictures/cyber-link.webp)',
        "global-data": 'url(./../pictures/global-data.webp)',
        "musyawarah-peduli": 'url(./../pictures/musyawarah-peduli.webp)',
        "pilahpilih": 'url(./../pictures/pilahpilih.webp)',
        "sutera-hall": 'url(./../pictures/sutera-hall.webp)',
        "the-kasablanka": 'url(./../pictures/the-kasablanka.webp)',
        "toyib-travel": 'url(./../pictures/toyib-travel.webp)',
        "wayang-distro": 'url(./../pictures/wayang-distro.webp)'
      },
    },
    colors: {
      "primary": {
        "0": "#D1EEFA",
        "100": "#A3DCF5",
        "200": "#5DC2EE",
        "300": "#18A9E7",
        "400": "#1387B9",
        "500": "#0E658B",
        "600": "#0A435C",
        "700": "#05222E"
      },
      "neutral": {
        "0": "#FFFFFF",
        "100": "#F2F2F2",
        "200": "#CCCCCC",
        "300": "#B3B3B3",
        "400": "#999999",
        "500": "#4F4F4F",
        "600": "#363636",
        "700": "#1C1C1C",
      }
    }
  },
  plugins: [],
};
export default config;
