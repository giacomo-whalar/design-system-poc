import { extendBaseTheme, theme as baseTheme } from "ui";

export const overrides = {
  colors: {
    primary: {
      "50": "#E5F0FF",
      "100": "#B8D5FF",
      "200": "#8ABBFF",
      "300": "#5CA0FF",
      "400": "#2E85FF",
      "500": "#006AFF",
      "600": "#0055CC",
      "700": "#004099",
      "800": "#002A66",
      "900": "#001533",
    },
    secondary: {
      50: "#ffe6cc",
      100: "#ffd1a3",
      200: "#f9bd80",
      300: "#fbb874",
      400: "#f8a34f",
      500: "#f6993c",
      600: "#ef8215",
      700: "#db730a",
      800: "#c86909",
      900: "#ab5a08",
    },
    tertiary: {
      50: "#f6f7fe",
      100: "#d9d9f7",
      200: "#cdccf5",
      300: "#b4b2f0",
      400: "#a2a0ee",
      500: "#918eeb",
      600: "#765eed",
      700: "#644ae8",
      800: "#3b3687",
      900: "#32275d",
    },
  },
};

export const brandTheme = extendBaseTheme(baseTheme, overrides);
