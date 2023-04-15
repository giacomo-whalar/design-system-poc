import { defineStyleConfig } from "@chakra-ui/react";

interface ITextTheme {
  baseStyle?: any;
  sizes?: any;
  defaultProps?: any;
}

export const TextTheme: ITextTheme = defineStyleConfig({
  // Limit the number of sizes
  sizes: {
    sm: {
      fontSize: "14px",
    },
    md: {
      fontSize: "16px",
    },
    lg: {
      fontSize: "30px",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
  },
});
