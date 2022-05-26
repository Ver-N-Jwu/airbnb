import React from "react";
import styled from "styled-components";
import Period from "./Period";
import Personnel from "./Personnel";
import Price from "./Price";
import * as S from "./style";

const SearchBar = () => {
  return (
    <S.SearchBar>
      <Period />
      <Block />
      <Price />
      <Block />
      <Personnel />
    </S.SearchBar>
  );
};

const Block = styled.div`
  width: 1px;
  height: 44px;
  border-right: 1px solid ${({ theme }) => theme.color.gray5};
`;

export default SearchBar;
