import React from "react";
import * as S from "./style";

// eslint-disable-next-line react/prop-types
const TextBox = ({ label, text }) => {
  return (
    <S.TextBox>
      <S.TextBoxLabel>{label}</S.TextBoxLabel>
      <S.TextBoxText>{text}</S.TextBoxText>
    </S.TextBox>
  );
};

export default TextBox;
