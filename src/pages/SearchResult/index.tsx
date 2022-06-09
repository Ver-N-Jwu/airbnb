import GNB from "@components/GNB";
import Map from "@components/Map";
import ResultList from "@components/ResultList";
import SearchBar from "@components/SearchBar";

import * as S from "./style";

const SearchResult = () => {
  return (
    <>
      <S.ResultHeader>
        <GNB />
        <SearchBar />
      </S.ResultHeader>

      <S.ResultContent>
        <ResultList />
        <Map />
      </S.ResultContent>
    </>
  );
};

export default SearchResult;
