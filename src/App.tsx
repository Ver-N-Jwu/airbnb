import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "@pages/Main";
import SearchResult from "@pages/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/searchResult" element={<SearchResult />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
