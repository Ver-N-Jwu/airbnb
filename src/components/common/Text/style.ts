import styled, { css } from "styled-components";

import theme from "@styles/theme";

export type TextStyledProps = {
  color?: keyof typeof theme.color;
  fontSize?: keyof typeof theme.fontSize;
  fontWeight?: keyof typeof theme.fontWeight;
  styles?: string;
};

export const Text = styled.span<TextStyledProps>`
  display: flex;
  align-items: center;
  color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.black)};
  font-size: ${({ theme, fontSize }) => (fontSize ? theme.fontSize[fontSize] : theme.fontSize.base)};
  font-weight: ${({ theme, fontWeight }) => (fontWeight ? theme.fontWeight[fontWeight] : theme.fontWeight.base)};

  ${({ styles }) =>
    styles &&
    css`
      ${styles}
    `}
`;
