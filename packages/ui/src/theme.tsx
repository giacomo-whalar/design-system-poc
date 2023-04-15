import { extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import { ButtonTheme } from "./Button/Button.style";
import { NavMenuTheme } from "./NavMenu/NavMenu.style";
import { NavMenuItemTheme } from "./NavMenuItem/NavMenuItem.style";
import { TextTheme } from "./Text/Text.style";
import { CardTheme } from "./Card/Card.style";

// We expose our custom theme, but the consumer can always extend it or override it
export const defaultTheme = {
  colors: {
    primary: {
      50: "#f3f5f6",
      100: "#dee2e8",
      200: "#c4c8cf",
      300: "#8b94a2",
      400: "#54657d",
      500: "#1c2128",
      600: "#3a495f",
      700: "#303d4f",
      800: "#15191e",
      900: "#000000",
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

// Adding only the themes from Chakra's components that we're interested in to keep the bundle lighter
const { Select, Switch, Heading } = chakraTheme.components;

export const theme = extendBaseTheme(defaultTheme, {
  components: {
    // These are components themes that we want to expose from Chakra unchanged.
    Select,
    Switch,
    Heading,
    // These are components themes that we want to expose from Chakra but we want to override or modify them.
    Button: ButtonTheme,
    NavMenu: NavMenuTheme,
    NavMenuItem: NavMenuItemTheme,
    Card: CardTheme,
    Text: TextTheme,
  },
});
