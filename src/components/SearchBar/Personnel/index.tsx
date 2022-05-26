import Icon from "@components/common/Icon";
import TextBox from "@components/common/TextBox";
import React from "react";
import * as S from "./style";
import SEARCH_ICON from "@assets/search-icon.svg";
import X_ICON from "@assets/x-icon.svg";

const Personnel = () => {
  return (
    <S.Personnel>
      <TextBox label={`인원`} text={`게스트 추가`} />
      <Icon iconName={X_ICON} iconSize={"base"} />
      <SearchButton />
    </S.Personnel>
  );
};

const SearchButton = () => {
  return (
    <S.SearchButton>
      <Icon iconName={SEARCH_ICON} iconSize={"base"}></Icon>
    </S.SearchButton>
  );
};

export default Personnel;
