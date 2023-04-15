import React from "react";
import { Button, theme, Heading, Stack } from "ui";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack spacing={5}>
        <Heading>App2</Heading>
        <Button variant="outline">Test</Button>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
