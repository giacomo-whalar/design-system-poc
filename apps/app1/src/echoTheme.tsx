import { extendBaseTheme, theme as baseTheme } from "ui";

export const overrides = {
  colors: {
    primary: {
      "50": "#EEE7FE",
      "100": "#D0BBFB",
      "200": "#B190F9",
      "300": "#9364F7",
      "400": "#7439F4",
      "500": "#560DF2",
      "600": "#450AC2",
      "700": "#340891",
      "800": "#220561",
      "900": "#110330",
    },
    secondary: {
      "50": "#E9FBFB",
      "100": "#C2F4F5",
      "200": "#9AECEE",
      "300": "#73E5E8",
      "400": "#4CDEE1",
      "500": "#24D7DB",
      "600": "#1DACAF",
      "700": "#168183",
      "800": "#0E5658",
      "900": "#072B2C",
    },
  },

  /*
   * For simplicity's sake, these component's overrides are declared here but they could be declared
   * in their own components folder and use defineConfigStyle for better type safety
   */
  components: {
    Button: {
      baseStyle: {
        borderRadius: "lg",
      },
      sizes: {
        md: {
          px: "8",
        },
      },
    },
    NavMenu: {
      baseStyle: {
        backgroundColor: "secondary.100",
        width: "80",
        padding: "6",
      },
    },
    NavMenuItem: {
      baseStyle: {
        p: "6",
        color: "secondary.500",
        textTransform: "uppercase",
      },
    },
    Card: {
      baseStyle: {
        container: { boxShadow: "lg", borderRadius: "md" },
      },
    },
  },
};

export const echoTheme = extendBaseTheme(baseTheme, overrides);
