import styled, { css } from "styled-components";

const sizeStyles = css`
  ${({ size, theme: { iconSize } }) =>
    iconSize[size] &&
    css`
      width: ${({ theme }) => theme.iconSize[size]};
      height: ${({ theme }) => theme.iconSize[size]};
    `}
`;

export const Icon = styled.figure`
  cursor: pointer;
  ${sizeStyles}
`;
