import GNB from "@components/GNB";
import SearchBar from "@components/SearchBar";
import React from "react";

import * as S from "./style";

const Main = () => {
  return (
    <>
      <S.MainBanner>
        <GNB />
        <SearchBar />
      </S.MainBanner>

      <S.MainContents>
        {/* <Content />
        <Content />
        <Content /> */}
      </S.MainContents>

      <S.Footer />
    </>
  );
};

export default Main;
