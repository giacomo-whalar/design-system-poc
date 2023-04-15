import { Box, useStyleConfig } from "@chakra-ui/react";
import React from "react";

interface NavMenuItemProps {
  children: React.ReactNode;
  variant?: "outline" | "solid";
}

export function NavMenuItem(props: NavMenuItemProps) {
  const { variant } = props;

  const styles = useStyleConfig("NavMenuItem", { variant });

  return (
    <Box __css={styles} as="li">
      {props.children}
    </Box>
  );
}
