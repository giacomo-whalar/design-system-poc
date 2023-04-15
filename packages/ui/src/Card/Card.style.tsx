import { defineStyleConfig } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

const { Card } = chakraTheme.components;

export const CardTheme = defineStyleConfig({
  ...Card,
  baseStyle: {
    ...Card.baseStyle,
    container: { ...Card.baseStyle?.container, borderRadius: "30px" },
  },
});
