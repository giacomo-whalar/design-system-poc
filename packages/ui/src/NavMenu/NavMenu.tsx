import React from "react";
import { Box, Stack, useStyleConfig } from "@chakra-ui/react";

interface NavMenuProps {
  children: React.ReactNode;
}

/* 
  This and its Item are custom components that don't exist in Chakra,
  but we can leverage Chakra utils to include our own variants, sizes, etc.
  and style it 100% through our theme.
*/
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
