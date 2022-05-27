import React, { useState } from "react";
import styled from "styled-components";

import Period from "./Period";
import Personnel from "./Personnel";
import Price from "./Price";
import * as S from "./style";

const SearchBar = () => {
  const [modalOpen, setModalOpen] = useState(0); //1 2 3

  return (
    <S.SearchBar>
      <Period modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Block />
      <Price modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Block />
      <Personnel modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </S.SearchBar>
  );
};

const Block = styled.div`
  width: 1px;
  height: 44px;
  border-right: 1px solid ${({ theme }) => theme.color.gray5};
`;

export default SearchBar;
