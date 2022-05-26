import TextBox from "@components/common/TextBox";
import React from "react";
import * as S from "./style";
import X_ICON from "@assets/x-icon.svg";
import Icon from "@components/common/Icon";

const Price = () => {
  return (
    <S.Price>
      <TextBox label={`요금`} text={`금액대 설정`} />
      <Icon iconName={X_ICON} iconSize={"base"} />
    </S.Price>
  );
};

export default Price;
