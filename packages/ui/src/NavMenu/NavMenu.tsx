import React from "react";
import { Box, Stack, useStyleConfig } from "@chakra-ui/react";

interface NavMenuProps {
  children: React.ReactNode;
}

export function NavMenu(props: NavMenuProps) {
  const styles = useStyleConfig("NavMenu");

  return (
    <Box as="nav" __css={styles}>
      <Stack direction="column" spacing={3} pt="10" as="ul">
        {props.children}
      </Stack>
    </Box>
  );
}
