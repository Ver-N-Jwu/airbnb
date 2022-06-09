import React, { createContext, Dispatch, useContext, useState } from "react";

const SearchResultStateContext = createContext<SearchResultStateType[] | null>(null);
const SearchResultDispatchContext = createContext<Dispatch<React.SetStateAction<SearchResultStateType[]>> | null>(null);

export type SearchResultStateType = {
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

const initialState = [] as SearchResultStateType[];

const SearchResultProvider = ({ children }: { children?: React.ReactNode }) => {
  const [searchResult, setSearchResult] = useState<SearchResultStateType[] | null>(initialState);

  return (
    <SearchResultStateContext.Provider value={searchResult}>
      <SearchResultDispatchContext.Provider value={setSearchResult}>{children}</SearchResultDispatchContext.Provider>
    </SearchResultStateContext.Provider>
  );
};
//response.room  // []

export const useSearchResultState = () => {
  const state = useContext(SearchResultStateContext);
  if (!state) throw new Error("Cannot find SearchResultProvider");
  return state;
};

export const useSearchResultDispatch = () => {
  const state = useContext(SearchResultDispatchContext);
  if (!state) throw new Error("Cannot find SearchResultProvider");
  return state;
};

export default SearchResultProvider;
