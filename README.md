# Design System / Component Library Proof of Concept

## Description

This monorepo contains 3 projects:

- `ui`
- `app1`
- `app2`

`ui` is the component and styling library for our design system. It provides a default theme, custom components and also reexports Chakra in its entirety so we can abstract the implementation of the lib from the consumers.

`app1` is a basic mock app that consumes our UI lib and acts as an example for the different possibilities this system provides.

`app2` is a dummy app that act as an example of how different apps might consume the same UI lib with different theming.s

## Getting Stared

In root dir:

1. `pnpm install`
2. `pnpm dev`

## UI library

There are several components included to illustrate the different ways of reusing, extending and overriding Chakra's components in order to author our library's components:

`Text` is an example of a component that doesn't need to override or extend functionality, so we reexport Chakra's `Text` component directly without creating a new component ourselves. We simply provide a custom theme to customize the sizes and variants that can be used, **replacing** those provided by Chakra.

`Button`. This is a component that is reexported from Chakra because we want to extend its functionality as well as its styles, so we create a Button component and also provide styling and custom variants by **replacing** Chakra's theme.

`NavMenu` and `NavMenuItem`. These are fully custom components that don't exist in Chakra, but we can leverage Chakra's theme to add variants and sizing if necessary.

`Card` is an example of a component that **extends** Chakra's component theme, modifying **some** of its properties only.

`Custom` is an example of a completely custom component that does not use style props. It uses `chakra` factory along with the `sx` prop to allow us to write regular CSS (JS object syntax) but leveraging our theme tokens. This is as close to vanilla CSS-in-JS as it gets.

In the `index.tsx` file, we export our custom components, the components we want to extend (e.g `Button`) and the entire Chakra library.

## App1

This project acts as a consumer of the UI library. It contains two different themes that extend the default one provided by the UI lib and also includes a component `ProductCard` that is specific to this project only, but uses the `Card` and `Button` from the UI lib.
