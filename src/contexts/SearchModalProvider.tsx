import { useState, createContext, useContext } from "react";

import { SearchModalDispatches, SearchModalState } from "_types/searchModal";

const SearchModalStateContext = createContext<SearchModalState | null>(null);
const SearchModalDispatchContext = createContext<SearchModalDispatches | null>(null);

const initialState = null;

const SearchModalProvider = ({ children }: { children?: React.ReactNode }) => {
  const [searchModal, setSearchModal] = useState(initialState);

  return (
    <SearchModalStateContext.Provider value={searchModal}>
      <SearchModalDispatchContext.Provider value={setSearchModal}>{children}</SearchModalDispatchContext.Provider>
    </SearchModalStateContext.Provider>
  );
};

export const useSearchModalState = () => {
  const state = useContext(SearchModalStateContext);
  // if (!state) throw new Error("Cannot find SearchModalProvider");
  return state;
};

export const useSearchModalDispatch = () => {
  const state = useContext(SearchModalDispatchContext);
  if (!state) throw new Error("Cannot find SearchModalProvider");
  return state;
};

export default SearchModalProvider;
