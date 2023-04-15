import { defineStyleConfig } from "@chakra-ui/react";

interface INavMenuTheme {
  baseStyle?: any;
  variants?: any;
  defaultProps?: any;
}

export const NavMenuTheme: INavMenuTheme = defineStyleConfig({
  baseStyle: {
    width: "60",
    backgroundColor: "primary.500",
    padding: "4",
  },
});
