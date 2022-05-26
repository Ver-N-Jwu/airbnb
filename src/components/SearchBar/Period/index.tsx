import Icon from "@components/common/Icon";
import TextBox from "@components/common/TextBox";
import React from "react";
import * as S from "./style";
import X_ICON from "@assets/x-icon.svg";

const Period = () => {
  return (
    <S.Period>
      <CheckIn />
      <CheckOut />
      <Icon iconName={X_ICON} iconSize={"base"} />
    </S.Period>
  );
};

const CheckIn = () => {
  return <TextBox label={`체크인`} text={`날짜 입력`} />;
};
const CheckOut = () => {
  return <TextBox label={`체크아웃`} text={`날짜 입력`} />;
};

export default Period;
