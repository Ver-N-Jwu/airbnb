import { BASE_URL } from "@constants/constants";
import { useSearchResultState } from "@contexts/SearchResultProvider";
import { useFetch } from "@hooks/useFetch";

import RoomItem from "./RoomItem";
import * as S from "./style";

const ResultList = () => {
  const searchResult = useSearchResultState();
  console.log("searchResult :>> ", searchResult);
  const data = useFetch({ method: "GET", url: "/test" });
  console.log("data :>> ", data);

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
