import { useSearchResultState } from "@contexts/SearchResultProvider";

import RoomItem from "./RoomItem";
import * as S from "./style";

const ResultList = () => {
  const searchResult = useSearchResultState();
  console.log("searchResult :>> ", searchResult);

  return (
    <S.ResultList>
      {searchResult ? (
        searchResult.map((roomInfo) => <RoomItem key={roomInfo.id} {...roomInfo} />)
      ) : (
        <div>Loading...</div>
      )}
    </S.ResultList>
  );
};

export default ResultList;
