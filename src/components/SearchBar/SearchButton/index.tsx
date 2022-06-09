import { Link } from "react-router-dom";

import SEARCH_ICON from "@assets/search-icon.svg";
import Icon from "@components/common/Icon";
import { BASE_URL } from "@constants/constants";
import { useCalendarState } from "@contexts/CalendarProvider";
import { useInputGuestState } from "@contexts/InputGuestProvider";
import { usePriceState } from "@contexts/PriceProvider";
import useFetch from "@hooks/useFetch";

import * as S from "./style";

type ResponseType = {
  id: number;
  maxGuest: number;
  name: string;
  address: string;
  detailAddres: string;
  latitude: number;
  longitude: number;
  roomType: string;
  roomCount: number;
  bedCount: number;
  bathroomCount: number;
  rating: number;
  reviewCount: number;
  originalPrice: number;
  salePrice: number;
  badge: string;
  thumbnails: string[];
  options: {
    kitchen: boolean;
    wifi: boolean;
    airConditioner: boolean;
    freeParkingLot: boolean;
    hairDryer: boolean;
  };
};

export type Rooms = {
  rooms: ResponseType;
};

const SearchButton = () => {
  const { checkIn, checkOut } = useCalendarState();
  const { priceRange } = usePriceState();
  const { adult, child, baby } = useInputGuestState();

  const { response, error } = useFetch<Rooms>({ method: "GET", url: `json/fakeDB.json` });

  const handleSearchRooms = () => {
    console.log("검색"); // 컨텍스트들의 state를 취합해서 쿼리문 만들어서 fetch요청
    if (!response) {
      console.log("로딩중");
      return;
    }
    console.log(response.rooms);
    console.log(error);
  };

  return (
    <S.SearchButton
      onClick={(e) => {
        e.stopPropagation();
        handleSearchRooms();
      }}
    >
      <Link to="/searchResult">
        <Icon iconName={SEARCH_ICON} iconSize="base" />
      </Link>
    </S.SearchButton>
  );
};

export default SearchButton;
