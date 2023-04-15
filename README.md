# Design System / Component Library Proof of Concept

This monorepo contains 3 projects:

- `ui`
- `app1`
- `app2`

`ui` is the component and styling library for our design system, it provides a default theme, custom components and also reexport Chakra in its entirety so we can abstract the implementation of the lib from the consumers.

`app1` is a basic mock app that consumes our UI lib and acts as an example for the different possibilities this system provides.

`app2` is a more simple app simply to act as an example of how different apps might consume the same UI lib with different theming.

## UI project

There are several components included to illustrate the different ways of reusing, extending and overriding Chakra's components:

`Text` is an example of a component that doesn't need to override or extend functionality, so we reexport Chakra's `Text` component directly without creating a new component ourselves. We simply provide a custom theme to customize the sizes and variants that can be used.

`Button`. This is a component that is reexported from Chakra because we want to extend its functionality as well as its styles, so we create a Button component and also provide styling and custom variants via theming.

`NavMenu` and `NavMenuItem`. These are fully custom components that don't exist in Chakra, but we can leverage Chakra's theme to add variants and sizing if necessary.
