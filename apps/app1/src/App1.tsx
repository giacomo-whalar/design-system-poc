import React from "react";
import "./App1.css";
import { Button } from "ui";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <h1 className="header">App1</h1>
          <Button variant="outline">test</Button>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
