import React from "react";

import Modal from "@components/common/Modal";
import { useSearchModalState } from "@contexts/SearchModalProvider";

import Period from "./Period";
import Personnel from "./Personnel";
import Price from "./Price";
import * as S from "./style";

// const SEARCH_BAR = {
//   PERIOD: <Calendar />,
//   PRICE: <PriceRangeGraph />,
//   PERSONNEL: <InputGuest />,
// };

const SearchBar = () => {
  const searchModal = useSearchModalState();

  return (
    <S.SearchBar openedModal={searchModal}>
      <Period />
      <S.Block />
      <Price />
      <S.Block />
      <Personnel />
      {searchModal && <Modal>{searchModal}</Modal>}
    </S.SearchBar>
  );
};

export default React.memo(SearchBar);
