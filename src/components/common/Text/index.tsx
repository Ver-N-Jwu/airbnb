import React from "react";

import * as S from "./style";

type TextProps = {
  text: string | number;
} & S.TextStyledProps;

const Text = ({ text, color, fontSize, fontWeight, styles }: TextProps) => {
  return (
    <S.Text color={color} fontSize={fontSize} fontWeight={fontWeight} styles={styles}>
      {text}
    </S.Text>
  );
};

export default Text;

{
  /* <Text text={안녕하세요} color fontSize={black} fontWeight={bold}></Text>; */
}
