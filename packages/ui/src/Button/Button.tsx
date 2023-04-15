import * as React from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

// Example of a component that we want to extend as well as change its style.
// We really need all buttons to log BOOM! when clicked.
export const Button = (props: ButtonProps) => {
  const { onClick, ...rest } = props;
  return (
    <ChakraButton
      onClick={(evt) => {
        console.log("BOOM!");
        onClick?.(evt);
      }}
      {...rest}
    />
  );
};
