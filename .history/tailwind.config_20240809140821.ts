import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,}",
    "./components/**/*.{js,ts,jsx,tsx,}",
    "./app/**/*.{js,ts,jsx,tsx,}",
    "./src/**/*.{js,ts,jsx,tsx,}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#29c7ac",
        },
        secondary: {
          DEFAULT: "#F637EC",
          dark: "#E535AB",
        },
        tertiary: "#FF0080",
        fave4: "#F8BE65",
        modeLightBg: "#4FF3C3",
        modeDarkBg: "#30373D",
        modeDarkText: "#bff9e8",
      },
      fontFamily: {
        // sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        normal: "300",
        medium: "600",
        bold: "700",
        extrabold: "900",
      },
      fontSize: {
        xxs: "11px",
        xs: "12px",
        sm: "15px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "48px",
        "5xl": "64px",
        "6xl": "84px",
      },
    },
    screens: {
      "3xs": "10em",
      xxs: "20em",
      xs: "30em",
      sm: "40em",
      md: "52em",
      lg: "64em",
      xl: "70em",
    },
    plugins: [require("tailwindcss-animate")],
  },
};

export default config;
