import styled, { css } from "styled-components";

// type StyleProps = {
//   size: string;
//   iconSize: object;
// };

// if size={"base"}

const styleSize = css`
  ${({ size, theme: { iconSize } }) =>
    iconSize[size] &&
    css`
      width: ${({ theme }) => theme.iconSize[size]};
      height: ${({ theme }) => theme.iconSize[size]};
    `}
`;

export const Icon = styled.figure`
  cursor: pointer;
  ${styleSize}
`;
