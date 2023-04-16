import { defineStyleConfig } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

const { Card } = chakraTheme.components;

/* 
  This component simply extends Chakra's own component theme, 
  modifying some of its properties and maintaining the rest.
*/
export const CardTheme = defineStyleConfig({
  ...Card,
  baseStyle: {
    ...Card.baseStyle,
    container: { ...Card.baseStyle?.container, borderRadius: "30px" },
  },
});
