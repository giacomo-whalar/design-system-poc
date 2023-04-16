import React from "react";
import { CircleStyled } from "./Circle.style";

/* 
This component doesn't use any Chakra utils.
To style it we use pure styled components with the added benefit of using our theme
*/
export function Circle(props: object) {
  return <CircleStyled onClick={() => console.log("Circle")} {...props} />;
}
