import { defineStyleConfig } from "@chakra-ui/react";

interface INavMenuItemTheme {
  baseStyle?: any;
  variants?: any;
  defaultProps?: any;
}

export const NavMenuItemTheme: INavMenuItemTheme = defineStyleConfig({
  baseStyle: {
    color: "primary.50",
    fontWeight: "bold",
    listStyle: "none",
    px: "3",
    py: "1.5",
    borderRadius: "lg",
    cursor: "pointer",
    _hover: {
      background: "primary.700",
    },
  },
  variants: {
    solid: {
      border: "none",
    },
    outline: {
      borderWidth: "1px",
      borderColor: "primary.300",
    },
  },
  defaultProps: {
    variant: "solid",
  },
});
