import React from "react";
import { chakra } from "@chakra-ui/react";
import { style } from "./Square.style";

/* 
This is a component styled with object syntax via the `sx` prop,
allowing us to use our tokens directly in the style.
By using the `chakra` factory function we also allow consumers
to use style props on our component (<Square marginTop="sm" />)
*/
export function Square() {
  return <chakra.div sx={style} />;
}
