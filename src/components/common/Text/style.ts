import styled, { css } from "styled-components";

import { lightTheme } from "@styles/theme";

export type TextStyledProps = {
  color?: keyof typeof lightTheme.color;
  fontSize?: keyof typeof lightTheme.fontSize;
  fontWeight?: keyof typeof lightTheme.fontWeight;
};

export const Text = styled.span.attrs<TextStyledProps>(({ theme, color, fontSize, fontWeight }) => ({
  style: {
    color: color ? theme.color[color] : theme.color.black,
    fontSize: fontSize ? theme.fontSize[fontSize] : theme.fontSize.base,
    fontWeight: fontWeight ? theme.fontWeight[fontWeight] : theme.fontWeight.base,
  },
}))<TextStyledProps>`
  display: flex;
  align-items: center;
`;

export const Text2 = styled.span<TextStyledProps>`
  display: flex;
  align-items: center;
  color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.black)};
  font-size: ${({ theme, fontSize }) => (fontSize ? theme.fontSize[fontSize] : theme.fontSize.base)};
  font-weight: ${({ theme, fontWeight }) => (fontWeight ? theme.fontWeight[fontWeight] : theme.fontWeight.base)};
`;
