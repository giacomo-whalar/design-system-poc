import { defineStyleConfig } from "@chakra-ui/react";

interface ITextTheme {
  baseStyle?: any;
  sizes?: any;
  defaultProps?: any;
}

/* 
  This is an example of a Chakra component of which we want to override its styles,
  limiting sizes, variants, etc. So we simply override its theme.
*/
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
