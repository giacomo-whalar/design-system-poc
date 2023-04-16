import { defineStyleConfig } from "@chakra-ui/react";

/*
  This theme completely overrides Chakra's own Button's
*/
export const ButtonTheme = defineStyleConfig({
  baseStyle: {
    lineHeight: "1.2",
    borderRadius: "full",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none",
    },
    _hover: {
      _disabled: {
        bg: "initial",
      },
    },
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      h: "8",
      minW: "8",
      fontSize: "sm",
      px: "3",
    },
    md: {
      h: "10",
      minW: "10",
      fontSize: "md",
      px: "4",
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "primary.400",
      color: "primary.500",
    },
    solid: {
      bg: "primary.500",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});
