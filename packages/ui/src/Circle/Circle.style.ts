import styled from "@emotion/styled";

export const CircleStyled = styled.div(
  ({ theme }) =>
    ` background-color: ${theme.colors.primary[200]};
      width: ${theme.sizes[8]};
      height: ${theme.sizes[8]};
      border-radius: ${theme.radii.full};
    `
);
