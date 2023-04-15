import React from "react";
import "./App2.css";
import {
  theme as defaultTheme,
  Box,
  ChakraBaseProvider,
  Flex,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  NavMenu,
  NavMenuItem,
} from "ui";
import { ProductCard } from "./components/ProductCard";
import { brandTheme } from "./brandTheme";
import { echoTheme } from "./echoTheme";

const themes = [defaultTheme, brandTheme, echoTheme];

function App() {
  const [currentTheme, setCurrentTheme] = React.useState(0);

  return (
    <ChakraBaseProvider theme={themes[currentTheme]}>
      <Flex>
        <NavMenu>
          <NavMenuItem variant="outline">
            <a href="#">Home</a>
          </NavMenuItem>
          <NavMenuItem>
            <a href="#">Dashboard</a>
          </NavMenuItem>
          <NavMenuItem>
            <a href="#">Users</a>
          </NavMenuItem>
        </NavMenu>

        <Box as="main" w="100%" p="10" background="primary.50">
          <Stack
            spacing={3}
            align="center"
            justify="flex-end"
            direction="row"
            mb="8"
          >
            <Switch colorScheme="primary" />
            <Select
              w="40"
              onChange={(evt: any) => {
                setCurrentTheme(parseInt(evt.target.value));
              }}
            >
              <option value="0">Default Theme</option>
              <option value="1">Brand Whitelabel</option>
              <option value="2">Echo</option>
            </Select>
          </Stack>
          <SimpleGrid columns={4} spacing={10}>
            <ProductCard
              image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              price={450}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              itaque architecto magni eos doloremque reiciendis ipsum iure
              magnam corrupti eum?
            </ProductCard>
            <ProductCard
              image="https://picsum.photos/id/30/355/237"
              price={200}
            >
              Provident beatae maxime debitis reprehenderit amet ipsum eius cum
              omnis, ipsam labore, pariatur ad. Voluptates quasi, eius tenetur
              enim aspernatur doloribus delectus!
            </ProductCard>{" "}
            <ProductCard
              image="https://picsum.photos/id/80/355/237"
              price={150}
            >
              Pariatur ad. Voluptates quasi, eius tenetur enim aspernatur
              doloribus delectus!
            </ProductCard>{" "}
            <ProductCard
              image="https://picsum.photos/id/39/355/237"
              price={150}
            >
              Voluptates quasi, eius tenetur enim aspernatur doloribus delectus!
            </ProductCard>{" "}
            <ProductCard
              image="https://picsum.photos/id/48/355/237"
              price={150}
            >
              Maxime debitis reprehenderit amet ipsum eius cum omnis, ipsam
              labore, pariatur ad.
            </ProductCard>
          </SimpleGrid>
        </Box>
      </Flex>
    </ChakraBaseProvider>
  );
}

export default App;
